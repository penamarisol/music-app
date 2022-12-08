/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { CyHttpMessages } from 'cypress/types/net-stubbing';

describe('Explore specs', () => {
  beforeEach(() => {
    cy.fixture('songs').then((playList) => {
      cy.intercept(
        'POST',
        'https://api-frontend-challenge.herokuapp.com/graphql',
        (req: CyHttpMessages.IncomingHttpRequest) => {
          if (req.body.operationName === 'SongsQuery') {
            req.reply({
              statusCode: 200,
              body: { data: playList },
            });
          }
        },
      ).as('playlistResponse');
    });

    cy.clearLocalStorage();
    cy.visit('/');
    cy.wait('@playlistResponse');
    cy.get('[data-cy=song-detail]').as('songDetail');
    cy.get('[data-cy=favourite-song-button]').as('favouriteButton');
    cy.get('[data-cy=play-button]').as('playButton');
  });

  it('visit the explore page', () => {
    cy.contains('Explore');
  });

  it('playlist should be display properly', () => {
    cy.get('@songDetail').should('have.length', 10);
  });

  it('song should be marked as favourite when click in the heart', () => {
    cy.get('@favouriteButton').first().click();
    cy.get('[data-cy=icon-heart-fill]').should('have.length', 1);
  });
  it('song should be removed as favourite when click in the fill heart', () => {
    cy.get('@favouriteButton').first().click();
    cy.get('[data-cy=icon-heart-fill]').should('have.length', 1);

    cy.get('@favouriteButton').first().click();
    cy.get('[data-cy=icon-heart-fill]').should('have.length', 0);
  });
  it('song should be played when play button clicked', () => {
    const expectAudioUrl = 'https://d2s139ebbsksc4.cloudfront.net/Noel.mp3';
    cy.wait(1000);
    cy.get('@playButton').first().click();
    cy.get('audio').should((els) => {
      els.each((_, audio) => {
        expect(audio.src).to.eq(expectAudioUrl);
        expect(audio.paused).to.eq(false);
      });
    });
  });

  it('song should be paused when pause button clicked', () => {
    const expectAudioUrl = 'https://d2s139ebbsksc4.cloudfront.net/Noel.mp3';
    cy.wait(1000);
    cy.get('@playButton').first().click();

    cy.get('[data-cy=pause-button]').as('pauseButton');
    cy.wait(1000);
    cy.get('@pauseButton').first().click();
    cy.get('audio').should((els) => {
      els.each((_, audio) => {
        expect(audio.src).to.eq(expectAudioUrl);
        expect(audio.paused).to.eq(true);
      });
    });
  });
});

export {};
