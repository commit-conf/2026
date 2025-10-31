const communities = require("./communities.js");
const sponsors = require("./sponsors.js");

module.exports = function () {
  return {
    buildTime: new Date(),
    baseUrl: "https://2026.commit-conf.com",
    metaImage: "https://2026.commit-conf.com/img/square-head.jpg",
    locationURL: "https://maps.app.goo.gl/97cwy2ZduumDUWXf9",
    name: "Commit Conf",
    email: "info@commit-conf.com",
    xAccount: "@commitconf",
    youtubeChannel: "UCd_1KHg4t2VKGsSDF8OD5Cw",
    environment: process.env.ENV || "prod",
    c4pURL: "https://koliseo.com/commit/2026/sessions",
    agendaURL: "https://koliseo.com/commit/2026/agenda",
    ticketsURL: "https://koliseo.com/commit/2026/tickets",
    photosURL: "https://flic.kr/s/aHBqjC8hg3",
    videosURL:
      "https://youtube.com/playlist?list=PLu976vDeELBquvUU5GLv0FVPAsrg7AEEv&si=GgaFl5YII4H30Gnh",
    newsletter:
      "https://commit-conf.us8.list-manage.com/subscribe?u=b180f87ed019c243f111b693a&amp;id=6a6bdcb448",
    communities,
    sponsors,
  };
};
