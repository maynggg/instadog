import { MongoClient } from "mongodb";
import { Types } from "mongoose";

const users = [
  {
    _id: new Types.ObjectId("6536f758dee63d61c7d51e1c"),
    userName: "snuggles",
    password: "123456",
    email: "snuggles@gmail.com",
    bio: "Hello world! I'm Snuggles the chihuahua",
    avatarUrl:
      "https://instagram.fsyd11-1.fna.fbcdn.net/v/t51.2885-15/352962558_652291660137737_3684177555039558947_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=instagram.fsyd11-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=l87CT2EXvhUAX-Z8Pcv&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzEyMzIxOTg1NzE0MDE0ODIxNg%3D%3D.2-ccb7-5&oh=00_AfCKeIojECTfRvLPOhuKc2snrlZIJ1JeJBwyBDUhfZB6Ig&oe=653BFDA7&_nc_sid=ee9879",
    createdAt: new Date("2023-10-10T04:16:39.991Z"),
    updatedAt: new Date("2023-10-10T04:16:39.991Z"),
  },
  {
    _id: new Types.ObjectId("6536f8571638c74b9a9e4cb7"),
    userName: "molly",
    password: "123456",
    email: "molly@gmail.com",
    bio: "Hello world! I'm Molly the good girl",
    avatarUrl:
      "https://instagram.fsyd11-1.fna.fbcdn.net/v/t51.2885-15/367654148_1310377416247834_425009918637095157_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=instagram.fsyd11-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=C5j9ibWCpykAX8CxXYm&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzE3MDk5MTExNTcwOTY5ODgzMQ%3D%3D.2-ccb7-5&oh=00_AfDDLANPOnS7rfRbHLLLk8AEc_RhSxsfUVVbYmwc7rrCsA&oe=653C1626&_nc_sid=ee9879",
    createdAt: new Date("2023-10-10T04:16:39.991Z"),
    updatedAt: new Date("2023-10-10T04:16:39.991Z"),
  },
  {
    _id: new Types.ObjectId("6536f893acaf8c71dd9194f0"),
    userName: "mocha",
    password: "123456",
    email: "mocha@gmail.com",
    bio: "Welcome to my page! I'm Mocha the beagle",
    avatarUrl:
      "https://instagram.fsyd11-2.fna.fbcdn.net/v/t51.2885-15/391356926_3618230338465328_7408929369142682626_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=instagram.fsyd11-2.fna.fbcdn.net&_nc_cat=108&_nc_ohc=aCGFuIJfxLwAX_nlZBQ&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzIxMjYyMjM3NzI1NTI1NjUxMQ%3D%3D.2-ccb7-5&oh=00_AfAYvKeLEQMVBZmcUUxTGH93786GZtFx_5HYAH3qcDCE3g&oe=653C08E7&_nc_sid=ee9879",
    createdAt: new Date("2023-10-10T04:16:39.991Z"),
    updatedAt: new Date("2023-10-10T04:16:39.991Z"),
  },
];

const posts = [
  {
    _id: new Types.ObjectId("6536f91a35b32b54f491da6e"),
    userId: new Types.ObjectId("6536f758dee63d61c7d51e1c"),
    photoUrl:
      "https://instagram.fsyd11-2.fna.fbcdn.net/v/t51.2885-15/320738356_425349503027306_5212902118935721110_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE1NDMuc2RyIn0&_nc_ht=instagram.fsyd11-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=NrkWu1UOMjwAX_zdKNt&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=Mjk5NjM3MjE2MjMyNDc2MjczMA%3D%3D.2-ccb7-5&oh=00_AfAM6RRlnlxfFlL3hpKxvO6p0ZK7fNiVFCvrcLCntfsAew&oe=653CAC04&_nc_sid=ee9879",
    caption: "It’s beginning to look a lot like Christmas!",
    createdAt: new Date("2023-09-10T04:16:39.991Z"),
    updatedAt: new Date("2023-09-10T04:16:39.991Z"),
  },
  {
    _id: new Types.ObjectId("6536faa7dbbab984d111f163"),
    userId: new Types.ObjectId("6536f8571638c74b9a9e4cb7"),
    photoUrl:
      "https://instagram.fsyd11-1.fna.fbcdn.net/v/t51.2885-15/367654148_1310377416247834_425009918637095157_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=instagram.fsyd11-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=C5j9ibWCpykAX8CxXYm&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzE3MDk5MTExNTcwOTY5ODgzMQ%3D%3D.2-ccb7-5&oh=00_AfDDLANPOnS7rfRbHLLLk8AEc_RhSxsfUVVbYmwc7rrCsA&oe=653C1626&_nc_sid=ee9879",
    caption: "Sunbathing with my bestie!",
    createdAt: new Date("2023-08-10T04:16:39.991Z"),
    updatedAt: new Date("2023-08-10T04:16:39.991Z"),
  },
  {
    _id: new Types.ObjectId("6536faab5eda30a4a07ed00c"),
    userId: new Types.ObjectId("6536f893acaf8c71dd9194f0"),
    photoUrl:
      "https://instagram.fsyd11-2.fna.fbcdn.net/v/t51.2885-15/391356926_3618230338465328_7408929369142682626_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=instagram.fsyd11-2.fna.fbcdn.net&_nc_cat=108&_nc_ohc=aCGFuIJfxLwAX_nlZBQ&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzIxMjYyMjM3NzI1NTI1NjUxMQ%3D%3D.2-ccb7-5&oh=00_AfAYvKeLEQMVBZmcUUxTGH93786GZtFx_5HYAH3qcDCE3g&oe=653C08E7&_nc_sid=ee9879",
    caption: "Happy birthday sista!",
    createdAt: new Date("2023-08-10T04:16:39.991Z"),
    updatedAt: new Date("2023-08-10T04:16:39.991Z"),
  },
];

const likes = [
  {
    postId: new Types.ObjectId("6536f91a35b32b54f491da6e"),
    userId: new Types.ObjectId("6536f8571638c74b9a9e4cb7"),
  },
  {
    postId: new Types.ObjectId("6536f91a35b32b54f491da6e"),
    userId: new Types.ObjectId("6536f893acaf8c71dd9194f0"),
  },
  {
    postId: new Types.ObjectId("6536faa7dbbab984d111f163"),
    userId: new Types.ObjectId("6536f758dee63d61c7d51e1c"),
  },
  {
    postId: new Types.ObjectId("6536faa7dbbab984d111f163"),
    userId: new Types.ObjectId("6536f893acaf8c71dd9194f0"),
  },
  {
    postId: new Types.ObjectId("6536faab5eda30a4a07ed00c"),
    userId: new Types.ObjectId("6536f758dee63d61c7d51e1c"),
  },
  {
    postId: new Types.ObjectId("6536faab5eda30a4a07ed00c"),
    userId: new Types.ObjectId("6536f8571638c74b9a9e4cb7"),
  },
];

const follows = [
  {
    followerId: new Types.ObjectId("6536f8571638c74b9a9e4cb7"),
    followingId: new Types.ObjectId("6536f758dee63d61c7d51e1c"),
  },
  {
    followerId: new Types.ObjectId("6536f893acaf8c71dd9194f0"),
    followingId: new Types.ObjectId("6536f758dee63d61c7d51e1c"),
  },
  {
    followerId: new Types.ObjectId("6536f758dee63d61c7d51e1c"),
    followingId: new Types.ObjectId("6536f8571638c74b9a9e4cb7"),
  },
  {
    followerId: new Types.ObjectId("6536f893acaf8c71dd9194f0"),
    followingId: new Types.ObjectId("6536f8571638c74b9a9e4cb7"),
  },
  {
    followerId: new Types.ObjectId("6536f758dee63d61c7d51e1c"),
    followingId: new Types.ObjectId("6536f893acaf8c71dd9194f0"),
  },
  {
    followerId: new Types.ObjectId("6536f8571638c74b9a9e4cb7"),
    followingId: new Types.ObjectId("6536f893acaf8c71dd9194f0"),
  },
];

const comments = [
  {
    _id: new Types.ObjectId("6537053c2092b0fee107fb4b"),
    postId: new Types.ObjectId("6536f91a35b32b54f491da6e"),
    userId: new Types.ObjectId("6536f8571638c74b9a9e4cb7"),
    text: "So cute!",
    createdAt: new Date("2023-09-10T05:16:39.991Z"),
    updatedAt: new Date("2023-09-10T05:16:39.991Z"),
  },
  {
    _id: new Types.ObjectId("6537057814ae0f1b76d85d72"),
    postId: new Types.ObjectId("6536f91a35b32b54f491da6e"),
    userId: new Types.ObjectId("6536f758dee63d61c7d51e1c"),
    text: "Thank you Molly!",
    createdAt: new Date("2023-09-10T06:16:39.991Z"),
    updatedAt: new Date("2023-09-10T06:16:39.991Z"),
  },
  {
    _id: new Types.ObjectId("653705a6bb0cd968ce4262fe"),
    postId: new Types.ObjectId("6536faa7dbbab984d111f163"),
    userId: new Types.ObjectId("6536f758dee63d61c7d51e1c"),
    text: "Love it!",
    createdAt: new Date("2023-10-10T06:16:39.991Z"),
    updatedAt: new Date("2023-10-10T06:16:39.991Z"),
  },
  {
    _id: new Types.ObjectId("653705cbb64b0924dde923c4"),
    postId: new Types.ObjectId("6536faa7dbbab984d111f163"),
    userId: new Types.ObjectId("6536f893acaf8c71dd9194f0"),
    text: "You two are too cute!",
    createdAt: new Date("2023-10-10T06:16:39.991Z"),
    updatedAt: new Date("2023-10-10T06:16:39.991Z"),
  },
  {
    _id: new Types.ObjectId("65370601dc9e800ac2be6a64"),
    postId: new Types.ObjectId("6536faab5eda30a4a07ed00c"),
    userId: new Types.ObjectId("6536f758dee63d61c7d51e1c"),
    text: "Thank you 'lil bro!",
    createdAt: new Date("2023-10-10T06:16:39.991Z"),
    updatedAt: new Date("2023-10-10T06:16:39.991Z"),
  },
  {
    _id: new Types.ObjectId("653706601f7a3d2abef58521"),
    postId: new Types.ObjectId("6536faab5eda30a4a07ed00c"),
    userId: new Types.ObjectId("6536f8571638c74b9a9e4cb7"),
    text: "Happy bday Snuggie!",
    createdAt: new Date("2023-09-10T06:16:39.991Z"),
    updatedAt: new Date("2023-09-10T06:16:39.991Z"),
  },
];

const URI = "mongodb://localhost:27017";
const DB_NAME = "instadog";

export const seedData = async () => {
  const client = new MongoClient(URI);

  try {
    const mongoClient = await client.connect();
    const db = mongoClient.db(DB_NAME);

    // Send a ping to confirm a successful connection
    await db.command({ ping: 1 });
    console.log("Successfully connected to MongoDB!");

    console.info("Cleaning db...");
    await Promise.all([
      db.collection("users").deleteMany({}),
      db.collection("posts").deleteMany({}),
      db.collection("likes").deleteMany({}),
      db.collection("follows").deleteMany({}),
      db.collection("comments").deleteMany({}),
    ]);

    console.info("Seeding data...");
    await Promise.all([
      db.collection("users").insertMany(users),
      db.collection("posts").insertMany(posts),
      db.collection("likes").insertMany(likes),
      db.collection("follows").insertMany(follows),
      db.collection("comments").insertMany(comments),
    ]);

    console.info("Done seeding data");
  } catch (error) {
    console.error("Failed to add seed data", error);
  } finally {
    await client.close();
  }
};

seedData();
