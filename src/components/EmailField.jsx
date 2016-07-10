var React = require('react'); 
var validator = require('email-validator');


var EmailField = React.createClass({

	getInitialState : function(){
		return {valid : true, value : ""};

	},

	onChange:function(e){

			var val = e.target.value;
			if(!validator.validate(e.target.value)){
				this.setState({valid:false,value : e.target.value});
				console.log("this is invalid" + this.state.valid);
			}
			else {
				this.setState({valid:true,value : e.target.value});
				console.log("this is valid"+this.state.valid);
			
			}
	},

		render:function(){
			var formclass = this.state.valid ? "form-group" : "form-group has-warning";
			console.log("value of valid"+this.state.valid + "value of formclass" + formclass);

			return (

					<div className={formclass}>

						<input placeholder = "Email" value = {this.state.value} className = "form-control" onChange = {this.onChange}></input>
					</div>
				);
		}

});


module.exports = EmailField;