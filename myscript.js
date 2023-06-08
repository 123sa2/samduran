fucntion formvalidation(){
	var name=document.login.samdaniel.value;
	
	if (name==null || name==""){
		alert("enter username first");
		return false
	}
	else if(name=="samdaniel"){
		return false
	}
	var name=document.myform.samduran.value;
	
	if(name==null || name=""){
		alert("incorrect username");
		return false
	}
	else if (name=="samduran"){
		return true
	}
	else alert("invalid Username and Password");
	
}