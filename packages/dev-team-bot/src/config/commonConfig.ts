export default () => ({
  environment: process.env.RAILWAY_ENVIRONMENT || 'localhost',
  deployBranch: process.env.RAILWAY_GIT_BRANCH || '',
});
