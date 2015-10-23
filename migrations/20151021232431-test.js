// #up
function(){
	db.testCollection.insert({"foo":"bar"});
	db.testCollection.remove({"foo":"baz!!"});
}
// #/up

// #down
function(){
	db.testCollection.remove({"foo":"bar"});
	db.testCollection.insert({"foo":"baz!!"});
}
// #/down
