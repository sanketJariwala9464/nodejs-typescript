import express from 'express';
import 'dotenv/config'
import 'module-alias/register';
import '@/database/connection';
import { LanguageMiddleware, ResponseHeaderMiddleware } from './middleware'; 
import { MessageParamsTypes } from "@/types/message.types";
import path from 'path';
import routes from './routes';
import bodyParse from 'body-parser';
import cors from 'cors';

declare global {
  namespace Express {
    interface Request {
      __: (payload: MessageParamsTypes) => string;
      __key: any;
    }
  }
}

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParse.urlencoded({ extended: false }));
app.use(express.json());
app.set("public", path.resolve(__dirname, "public"));
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));
app.use(LanguageMiddleware.setLanguage);
app.use(ResponseHeaderMiddleware.index);
app.use(routes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});