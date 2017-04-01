# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## plants
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description | text      | not null
instructions| text      | not null, foreign key (references notebooks), indexed
owner_id    | integer   | not null, foreign key (references users), indexed
lng         | float     | not null
lat         | float     | not null
img_url     | text      |
start_time  | time      |
end_time    | time      |

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed, unique [tag_id]
tag_id      | integer   | not null, foreign key (references tags), indexed
