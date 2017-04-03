# Plantshare

[Live][heroku]

[heroku]:(https://github.com/whasting/Plantshare)

## Minimum Viable Product
Plantshare is a mobile application built using Django on the backend and React Native on the frontend. Here are the MVPs:

1. Emulator for Demonstration
2. Production README
3. New account creation, login, and guest/demo login
4. Users can view listings (plants)
5. Use Google Map API to show listings based on location
6. Taggings
7. Users can CRUD listings via their dashboard
8. Users can 'claim' listings that they want
9. Posters can approve claims, reducing the number of
available items in the listing

Bonus:
- Multiple locations
- User profiles

Superbonus:
- Direct Messaging
- Web App

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: docs/wireframes
[components]: docs/component-hierarchy.md
[sample-state]: docs/sample-state.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Technologies & Technical Challenges

Plantshare will be using Rails on the backend and React/Redux on the frontend.

The main technical challenges will be learning React Native.

Additionally, the site will be using a combination of Google Maps Api to display the location of a plant detail item and Cloudinary image storage to allow
users to upload images of their plants.

## Group Members & Work Breakdown

#### [Eddie Lao](https://github.com/eddielao)
  -

#### [Colin Ritchey](https://github.com/colinritchey)
  - backend setup
  - frontend setup
    - Redux setup
    - React Components development
    - CSS styling
  - reviewing pull requests

#### [Wade Hastings](https://github.com/whasting)
  - backend setup

  - Bug Support

## Development Timeline

### Day 1: Backend and frontend setup

- Entire backend with Django (Wade, Colin, Eddie)
- Authentication/Full React

### Day 2:

- Plant table setup
- Research and implement Google Maps API (Wade & Colin)

### Day 3:

- Backend: Filter index implementation and Tags/Taggings Tables(Eddie)
- Frontend: Show page for a single plant (Colin)
- Assist in Backend filer, image hosting on Cloudinary (Wade)
- Searchbar within the navbar (Eddie & Wade)

### Day 4:

- Backend: Filter by user (Eddie)
- Frontend: User dashboard (Colin)
- Get started on CRUD functionality (Wade & Eddie)

### Day 5:

- Backend checks for CRUD (Eddie)
- Frontend CRUD (Colin)
- Review and Assist (Wade)


### Bonus Features (TBD)
