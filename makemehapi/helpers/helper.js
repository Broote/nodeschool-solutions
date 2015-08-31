module.exports = function(context) {
  console.log(context);
  return context.name + context.suffix
};