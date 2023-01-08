import express, { urlencoded } from "express";
import axios from "axios";
import cors from "cors";
import config from "./config";

const app = express();

app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cors({ origin: config.origin }));

const generateMessage = (msg: { content: string; name: string; email: string }) => {
  let date = new Date(Date.now());
  let params = {
    username: "new portfolio message",
    avatar_url: "",
    content: "@everyone",
    embeds: [
      {
        title: "name: " + msg.name,
        color: 15258703,
        thumbnail: {
          url: "",
        },
        fields: [
          {
            name: "content",
            value: msg.content,
            inline: false,
          },
	  {
		name: 'email',
		value: msg.email,
		inline: false,
	  },
          {
            name: "date",
            value: date.toLocaleDateString() + "  " + date.getHours() + ":" + date.getMinutes(),
            inline: false,
          },
        ],
      },
    ],
  };
  return params;
};

app.post("/", async (req, res, next) => {
  let message = { name: req.body.name, content: req.body.content, email: req.body.email };
  let msg = generateMessage(message);
  let response = await axios.post(config.WEBHOOK_URL, JSON.stringify(msg), { headers: { "Content-Type": "application/json" } });
  return res.status(200).json(response.status);
});

export default app;
