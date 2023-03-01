// Một module chỉ có thể export default một lần 
// Khi import thì ta có thể đặt tên bất kỳ vì không có dấu {}
export default class Student{
    constructor(name , age){
        this.name = name 
        this.age = age 
    }
}
// Thư viện axios sử dụng cú pháp require và module.export() nên  ta không thể sử dụng cú pháp có import của ES6 để sử dụng 