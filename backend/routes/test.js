import express from "express";
import { compareDataWithDB, findByCity, findByName, findByPan, findByPhone, findByemail, getPaginatedResult, getResult, test, testUpdate } from "../controllers/text.js";

const testRouter = express.Router();

testRouter.post('/test', test);

testRouter.post('/update', testUpdate);

testRouter.post('/compare', compareDataWithDB);

testRouter.get('/read', getResult);

testRouter.get(`/readPagination`, getPaginatedResult);

testRouter.get('/findByCity/:city', findByCity);

testRouter.get('/findByName/:name', findByName);

testRouter.get('/findByemail/:email', findByemail);

testRouter.get('/findByPan/:pan', findByPan);

testRouter.get('/findByPhone/:phone', findByPhone);

export default testRouter;