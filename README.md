# Plantshare

[Live][heroku]

## Minimum Viable Product
Plantshare is a web application built using Django on the backend
and React/Redux on the frontend. Here are the MVPs:

1. Hosting on Heroku
2. Production README
3. New account creation, login, and guest/demo login
4. Users can view listings (plants)
5. Use Google Map API to show listings based on location
6. Taggings
7. Users can CRUD listings via their dashboard

Bonus:
- Multiple locations
- User profiles

Superbonus:
- Mobile app

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

Plantshare will be using Django on the backend and React/Redux on the frontend.

The main technical challenges will be learning how to integrate Django with
Redux, and learning Python.

Also the site will be using a combination of Google Maps Api to display the
location of plant distribution and Cloudinary image storage to allow
users to upload images of their plants.

## Group Members & Work Breakdown

#### [Eddie Lao](https://github.com/eddielao)
  - backend setup

#### [Colin Ritchey](https://github.com/colinritchey)
  - frontend setup
    - Redux setup
    - React Components development
    - CSS styling
  - reviewing pull requests

#### [Wade Hastings](https://github.com/whasting)
  - Fullstack
  - Bug Support

## Development Timeline

### Day 1: Backend and frontend setup

- Setup backend skeleton (Eddie)
- Setup frontend skeleton (Colin)
- Assist backend setup (Wade)

### Day 2:

- Backend: render an index of plants with basic information into JSON. (Eddie)
- Frontend: Create the Plant Index Container and plant index items (Colin)
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

- [ ] Connect Google Maps API
- [ ] Get weather for ski resorts via API
- [ ] Get rating for ski resorts via API
- [ ] Event suggestions based on event details and user profiles
