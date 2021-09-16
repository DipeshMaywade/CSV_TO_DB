module.exports = (sequelize, Sequelize) => {
    const tutorial = sequelize.define("the_nerd_series", {
      title: {
        type: Sequelize.STRING
      },
      creator: {
        type: Sequelize.STRING
      },
      link: {
        type: Sequelize.STRING
      },
      pubDate: {
        type: Sequelize.STRING
      },
      comments: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.TEXT
      },
      contentSnippet: {
        type: Sequelize.TEXT
      },
      categories: {
        type: Sequelize.STRING
      },
      isoDate: {
        type: Sequelize.STRING
      },

    });
    return tutorial;
  };