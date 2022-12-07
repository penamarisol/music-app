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

    cy.visit('/');
    cy.wait('@playlistResponse');
    cy.get('[data-cy=song-detail]').as('songDetail');
  });

  it('visit the explore page', () => {
    cy.contains('Explore');
  });

  it('playlist should be display properly', () => {
    cy.get('@songDetail').should('have.length', 10);
  });
});

export {};
