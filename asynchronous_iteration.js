async function* load() {
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}
//for-await-of loop
async function test() {
    for await (const val of load()) {
        console.log(val)
    }
}
test();
console.log('End');

async function fntest(){
    for await (const val of [10,20,30,40]){
       console.log(val)
    }
 }
 fntest();
 console.log('End');