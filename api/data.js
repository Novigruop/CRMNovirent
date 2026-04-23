export default async function handler(req, res) {
  try {
    const action = req.query.action;

    const url = `https://script.google.com/macros/s/AKfycbwWFcQ1nlVsLyiEOFMvSbYAxPHdAqSvKP1qMCvp1BrQkhb6ctod8oSShrj1cBKWzSc/exec?action=${action}`;

    const response = await fetch(url);
    const data = await response.json();

    res.status(200).json(data);

  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
}
