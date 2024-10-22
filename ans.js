class MyArray{
    constructor(){
        this.length=0;
        this.data={}
    }
    push(item){
        this.data[this.length]=item;
        this.length++;
        return this.length;
    }
    get(index){
        return this.data[index];
    }
}
const MyNewArray=new MyArray();
MyNewArray.push('akon')
MyNewArray.push('jhon')
MyNewArray.push('petter')
console.log(MyNewArray.get(0))
console.log(MyNewArray)
