function f(atg: number, arg2: number): void {
  console.log(arg2)
}

const f2 = (a: number, b: number): number => {
  return a + b
}


class User {
   name: string;
   age: number;
   
   constructor(props : {name:string,age:number}){
      this.name = props.name,
      this.age = props.age
   }

   printName(): string{
     return `${this.name}`
   }
}

const newUser = new User({
   name:'Yur',
   age: 22,
   
})
