import express, { Request, Response } from "express"

const app = express()
const PORT = Bun.env.PORT || 9000
app.get("/", (req: Request, res: Response) => {
  return res.status(200).json({ success: "Hello from Express" })
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}...`);
});