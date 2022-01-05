import Router from 'next/router';

export default (context = {}, target) => {
 
  console.log(target);
  console.log(context);
  console.log(context.pathname);
  

   
   if(context.pathname) {
 	   
 	    console.log("CHECK_HERE_");
 	    if(context.store.getState().auth.authUser !== "access_token"){
			 console.log("ze");
			 return false;
 	    } else {
			return true;
		}
 	   
   } else {
 	        context.res.writeHead(303, { Location: target });
 			context.res.end();
   }
};
