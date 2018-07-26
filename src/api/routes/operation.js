module.exports = function(app) {
    var controller = app.controllers.operation;

    app.route('/v1/opetarions/sum')
        .post(controller.sum);

    app.route('/v1/opetarions/avg')
        .post(controller.avg);
};
