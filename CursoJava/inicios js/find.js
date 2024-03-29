/**1.Utilizando el método find, busca el usuario cuyo nombre es Juan y 
muestra su edad. */
const users = [
	{
		"name" : "Paco",
		"isActive" : false,
		"age": 18
	},
	{
		"name" : "Laura",
		"isActive" : false,
		"age": 21
	},
	{
		"name" : "Raquel",
		"isActive" : false,
		"age": 15
	},
	{
		"name" : "Juan",
		"isActive" : true,
		"age": 17
	},
	{
		"name" : "Alberto",
		"isActive" : false,
		"age": 50
	},
	{
		"name" : "Rodolfo",
		"isActive" : true,
		"age":7
	},
];

const choosedUser = users.find(users => users.name === 'Juan').age;

console.log(choosedUser); // Debería mostrar: 17