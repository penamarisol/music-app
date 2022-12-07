# Z1 Music App 🎶

I love music too 🥁! So I want to share with all Z1 team my particular version of this music application. Come in, **enjoy my code and your fav tunes**!

## ▶️ To start

It is time you could hear your fav tunes. I suggest you two essay ways to do it: 

-  Star by **cloning or downloading this project**. Remember to execute this commands in your terminal before start: 

```bash
  yarn && yarn dev
```

Z1 Music App is now running at http://localhost:3000!

- Or go to the live demo here: [Z1 Music App](http://music-app-psi.vercel.app/)

<br>

## ▶️ LogBook

<br>
I go into this project in which, for ten days, it will be my second home. My first goal is to know everything releated with this project: technologies, architecture and, of course, what are the features I have to be involved in 🤖. My main mission is just to add value to this Music app but without losing its initial essence. 

<br>

**Schedule my work ⏳️**

So, once I have got started with the project, it's time to schedule my work. I use `Jira` on a daily basis, but in this case since I'm the only developer on the team at the moment, I have decided to use `Trello`. 
- You can see [here](https://trello.com/invite/b/LgfxRqdy/ATTI5cfd25af1bf88a9c4a7b901dbddeafa4C6C29852/music-app-planning) what is the progress of my application.

I expect that when you read these lines, all the tasks will be on the Done list.
I am using a `Kanban methodology` because I think it is the best option to organize my tasks on my own and reach to the deadline 🏁.

<br>

**Deploy Z1 Music App 🌍**

My following task is to deploy my project so that the user is able to use the app.
As you will see in this logbook, I have preferred to do the tasks related with infrastructure and structure first. This helps me with the project set up before I start with the code. 

As a deployment method, I have choosen `Vercel` instead of `Github pages` or another similar platform because of the advantages of this technology. With `Vercel`, for example: 
- I can preview my site in every push since it build a unique URL for every commit and PR.

- or I can generate rollbacks to any version, but without the need to revert commits or data changes.


> Source: [Bejamas Site](https://bejamas.io/compare/github-pages-vs-vercel/)

<br>

**Config commit linter ⬆️**

Getting a clean code is the goal of every developer, but it is so important, as well, to have a clean git log. Commits rules help to improve teamwork and make sense as a unit to your commit messages. So, I have decided to use `CommitLint` and `Husky` to linting my commits. 

[`Conventional commits`](https://www.conventionalcommits.org/en/v1.0.0/) help us to follow certain rules in your commits. If we try to make a commit that does not follow the convention we have chosen, it will fail. Meanwhile, [`Husky`](https://typicode.github.io/husky/#/) is a git hooks to execute rules when we add a commit message. 

> Source: [Medium](https://medium.com/dottech/mejorando-los-mensajes-de-git-commit-con-husky-y-commitlint-7bddf6ab22c2)

<br>

**CI with Github Actions 🚀**

For me it is really significant to have a clean code and a working application without any bugs or error/warning messages. In addition to using git hooks before each commit, I find it very necessary to check the code on each PR automatically. With this objective, `Continuous Integration` with [`Github Actions`](https://github.com/features/actions) allows me to meet minimum quality standard. For example, run test or linter before merging each branch.

> Source: [Github Docs](https://docs.github.com/en/actions/using-workflows/about-workflows)

<br>

**E2E testing: Cypress 📝**

I have decided to introduce e2e testing  because this kind of testing ensure the app is ready for launch with the security that appearance and behaviour work properly and there is any bug. In addition, I have worked previously with this technology, so I feel more comfortable on it. 

In this implementation I have had some issues regarding on execute e2e testing on ci workflow. Basically, I was looking for any solution and I found in the following resource the library `start-server-and-test`.

> Source: [Cypress Github Actions Docs](https://docs.cypress.io/guides/continuous-integration/introduction#Boot-your-server)

<br>

**Atomic Web Design ⚛️**

I have decided to change the current structure of initial components folder following the [`Atomic Web Design`](https://bradfrost.com/blog/post/atomic-web-design/) rules. This methodology categorizes into hierarchies each component in atoms, molecules, organisms, pages and templates. 


This decision is made since I am going to start working on new components according to Figma design. So that, the number of components would gradually grow to keep them in a single folder.  
 

> Source: [Talk about atomic design systems by Luz Riquelme](https://player.vimeo.com/video/775004105?color&autopause=0&loop=0&muted=0&title=1&portrait=1&byline=1&h=4fb73016b1#t=)

<br>

**Atoms**

My first step has been created five atoms: Favourite, Image, Player Control, Progress Bar and Tag. In this step I have experienced several doubts and learnings that I would like to share with you: 

- In Player Control atom, it was a challenge about how to import a certain icon only when it is necessary. I have discovered this next advanced feature: [`Dynamic Import`](https://nextjs.org/docs/advanced-features/dynamic-import)

- And, in image atom, I have a doubt about what is the convenience of adding Next images to image component. At the end, I have decided not to use it because the number of images in the application is not very large. Also, I don't have any requirement about app performance and SEO; so it seems unnecessary to spent time adjusting image atoms with Next image component. 

<br>

**Molecules**

My second step has been created four molecules: Song Player Thumbnail, Player Progress Bar, PlayerControls and SongDescription. In this step, by contrast, I have felt more comfortable, since I made the decision-making work previously: this work is more releated of layout.


<br>

**Organisms**

My third step has been created four organisms: Song Detail, Song Detail Placeholder, Songs List and Player. In this step, I have been focus on create the first draft of theses components, since when I'll introduce the logic, they'll change.

<br>

**Apollo Client vs React Query ⚔️**

It has been really tricky making a decision about which service I should use. 

To get into context, I had never used `Apollo Client` and, I used `React Query` in several projects some month ago. So, it was time to look for extra information about both tecnologies. I saw a comparative table between [`Apollo Client`](https://www.apollographql.com/docs/react/) vs [`React Query`](https://react-query-v3.tanstack.com/) [here](https://tanstack.com/query/v4/docs/comparison?from=reactQueryV3&original=https://react-query-v3.tanstack.com/comparison). 

It seems that `React Query` provides us better performance, but why did I finally choose `Apollo Client`?.

First of all, because `Apollo Client` is the recommended option by [`Graphql`](https://graphql.org/code/). Secondly, because with `React Query` I had to install as well `Axios` or, maybe, `GraphQL Request`. And, finally, because I felt comfortable with `Apollo Client` getting started docs and I only needed this technology just for one fetching service.  

<br>

**Display Songs 🔊**

Once I have the songs data, it's time to display them in the app. I have refactored this feature several times in the process:
- Initially I had thought to treat the data in the View container directly and transform it into a useLogic.
- Then, looking for information, I found the concept of [`Anti-corruption layer`](https://www.viewnext.com/anti-corruption-layer/). Following this strategy, it recommended you transform the data before using it in your view. So if the api changed, your view was agnostic to it.
- The next challenge was to transform the data, mainly the songs durantion. I thought about including it in the service mapper. But, it took too long while rendering each audio.
So I finally got it out of the mapper and I've decided to do it in each render. 
- Also, I have created the context with the playlist information and I have tested this feature. Here I found some challenges like typing the useReducer or making an intercept with graphql.


<br>

**Mark Song as Favourite 🖤**

As we don't have any api method to save favourite songs, I have decided to save this information in the Local Storage. Also, I have chosen to manage favourite functionality in the Playlist context and also in the custom hook. This way, if we want this functionality in more parts in the future, it will be easier to add it.


<br>

## ▶️ Requisites

- User should be able to:
  - see list of songs ✅
  - listen to any song they choose
  - play and pause song
  - control track
  - mark a song as favorite ✅

- User should be able to:
  - move between songs with the prev/next buttons of the audio player

- App should look good in all window sizes ✅
- Add unit or integration tests ✅
- Add some micro interactions and animations
- Be careful about accessibility
- Be careful about your markup semantics ✅

