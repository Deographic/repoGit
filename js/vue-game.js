 new Vue ({
	el:'#app',
	data: {
		
		start: true, 
		plLife:100,
		monsterLife:100,
		saludo: 'hola',
		actions:[],
		
		
		
	} ,
	
	computed:{
		plCounter :function(){
			return{
				width: this.plLife + '%'		
			};
		},
		MonsCounter : function (){
			 return{
			 	width: this.monsterLife + '%'
			 };
		},
	
	},	

	methods: {

		attack: function(){
			
			this.plAttack( 16);
			this.monsterAttack();
			this.checkLife();
		},

		spAttack: function(){
			
			this.plAttack(21, true);
			this.monsterAttack();
			this.checkLife();
		},

		healPl: function(){
			var heal;
			if (this.plLife < 90){
				heal =Math.floor(Math.random() * 21);
				this.plLife = this.plLife + heal;	
				this.actions.unshift('You heal yourself for ' + heal);
			}
			this.monsterAttack();
		},

		//player attacks monster from attack and spattack
		plAttack:function (max, spAttack){
				var attack = Math.floor(Math.random() * max);
				this.monsterLife = this.monsterLife - attack;
				this.actions.unshift('You hit the monster for ' + attack + (spAttack ? " with an special attack" : ""));
				
		},

		// monster attacks player 
		monsterAttack:function(){
				attack = Math.floor(Math.random() * 21);
				this.plLife = this.plLife - attack;
				this.actions.unshift('Monster hits You for ' + attack);
				
		},

		//check players life
		checkLife:function(){
			if (this.monsterLife<=0){
				this.saludo="you win";
				this.start=true;
				
			}
			if(this.plLife<=0){
				this.saludo="you loose";
				this.start=true;
				
			}

		} ,

		startGame: function(){
			this.monsterLife = '100';
			this.plLife='100';
			this.actions=[];
			//vaciar el array
		}
	}
 	
});

 //vaciar el array

