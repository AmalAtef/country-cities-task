export const authMigration = {
  1: previousVersionState => ({
    authUser: previousVersionState.authUser,
    isLogin: previousVersionState.isLogin
  })
};
