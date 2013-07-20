require('./config')

exports.bind = function(req, res) {
    var id = req.params.id;
    console.log('Retrieving beijing: ' + id);
    db.collection('beijing', function(err, collection) {
        collection.findOne({'_id':new BSON.ObjectID(id)}, function(err, item) {
            res.send(item);
        });
    });
};
