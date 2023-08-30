    // module.exports = {
    //   graphql: {
    //     config: {
    //       endpoint: "/graphql",
    //       shadowCRUD: true,
    //       playgroundAlways: true,
    //       depthLimit: 10,
    //       amountLimit: 100,
    //       apolloServer: {
    //         tracing: false,
    //         introspection: true,
    //       },
    //     },
    //   },
    // };

    module.exports = ({ env }) => ({
      url: env("RENDER_EXTERNAL_URL"),
      dirs: {
        public: "/data/public"
      },
    });