
export default {
    data() {
		return {
            RB: "",
		}
	},
        var :RB = document.getElementById(RB),
        var :image = document.getElementById(image),

    
        mounted() {
            this.setRB()
        },

        methods: {
        RB:addEventListener<"input", function() 
        
        {
            if (RB.value.legth > 0) {
                image.style.display = "block";
        
            }  else{
                    image.style.display = "none";
            }
        },


    }


}


//if (this.widget.props.RB.string.value.legth > 0) 