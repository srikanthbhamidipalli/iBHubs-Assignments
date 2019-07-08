Person = { firstname: 'John',lastname : 'Bob',
            BuyaCar:function(car,showRoomname){
                var c=0,index=0;
                for(i=0;i<showRoomname.cars.length;i++){
                    //var a=showRoomname.cars[i]
                    // console.log(a)
                     if(car.id===showRoomname.cars[i].id)
                         { 
                             c++;
                             break;
                         }index+=1;
                        }
                    if(c!=0){
                        this.carsownedlist.push(car);
                        console.log("purchased a car from",showRoomname.name)
                        showRoomname.cars.splice(index,1);
                    }
                    else
                        {
                            console.log("No such car in this Showroom");
                        }    
                },
           
            carswishlist :[],
            carsownedlist :[],
            WishaCar:function(car){
                var c=0;
                for(let i=0;i<this.carswishlist.length;i++){
                    if(car.id===this.carswishlist[i].id){
                        c++;
                        break;
                    }
                }
                if(c==0)
                    this.carswishlist.push(car);
                else
                    console.log("You have Already wished!!");
            },
        }
showRoom = { addr : "kphb,Hyd", 
            name : "HotWheels",
            cars: [], 
            importCars:function(cars)
                {cars.forEach(element => {this.cars.push(element)});} }
cars=[
    {id:1,color:"blue",speed:"200kmph",model:"racing",fueltype:"petrol",},
    {id:2,color:"white",speed:"130kmph",model:"old",fueltype:"diesel",},
    {id:3,color:"white",speed:"130kmph",model:"old",fueltype:"diesel",}
    ]

showRoom.importCars(cars)
console.log("Cars in Showroom are",showRoom.cars)

Person.WishaCar({id:4,color:"blue",speed:"200kmph",model:"racing",fueltype:"petrol"})
console.log("Cars in wishlist are",Person.carswishlist)
Person.BuyaCar({id:3,color:"blue",speed:"200kmph",model:"racing",fueltype:"petrol"},showRoom)
console.log("cars in ownedlist are",Person.carsownedlist)
showRoom.importCars([{id:3,color:"white",speed:"130kmph",model:"old",fueltype:"diesel",}])

console.log("Cars in showRoom are",showRoom.cars)

