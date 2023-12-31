const app = Vue.createApp({
    data(){
        return{
            winkelwagen:0,
            geselecteerdProduct:0,
            product: 'GSM oplader',
            merk:"Ailkin",
            prijs: 15.99,
            beschrijving: "Een efficiente en duurzame oplader voor je GSM.",
            image: './assets/images/chargerblue.png',
            opVoorraad: false,
            // aantalInVoorraad: 0,
            productDetails: ["universeel","smartphone","2 aansluitingen","inclusief kabel"],
            soorten:[
                {soortId:0, kleur:"blue", image:"./assets/images/chargerblue.png", aantal:20},
                {soortId: 1, kleur: "pink", image:"./assets/images/chargerpink.png", aantal:0}
            ]
        }
    },
    methods:{
        toevoegenAanWinkelwagen(){
            if(this.soorten[this.geselecteerdProduct].aantal > 0){
                this.winkelwagen +=1;
                this.soorten[this.geselecteerdProduct].aantal -=1;
            }
        },
        updateAfbeeldingVoorraad(soortId){
            this.geselecteerdProduct = soortId;
        }
    },
    computed:{
        beschrijvingMerk(){
            return this.beschrijving + " - " + this.merk
        },
        imagePrint(){
            return this.soorten[this.geselecteerdProduct].image;
        },
        aantalInVoorraad(){
            return this.soorten[this.geselecteerdProduct].aantal;
        }
    }
})
const mountedApp = app.mount('#app');