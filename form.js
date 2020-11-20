let em= document.getElementById("email");
let pwd= document.getElementById("pass");
let pw1= document.getElementById("pass2");
let ph= document.getElementById("phone");



function validate()
{
    let pq = document.getElementById("ipass");
    let el = document.getElementById("imail");

    if(el.value== "" || pq.value== "")
    {
        alert("fields cannot be empty");
        return false;
    }
    else
    {
        let xp=/^([A-Za-z0-9\.\-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
        if(xp.test(el.value))
        {
            console.log("Correct");
            return true;
        }
        if(pq.value.length<=7)
        {
            alert("Please enter a valid Password");
            return false;
        }
        else
        {
            alert("Please check your Mail id");
            return false;
        }
    }
}


function validate1()
{
    if(em.value== "" || pwd.value== "" || ph.value== "")
    {
        alert("Fields cannot be empty");
        return false;
    }
    
    else if(pwd.value != pw1.value)
    {
        alert("Password Missathch");
        return false;
    }
    else
    {
        let p= /^([0-9]{3})([\-\. ])([0-9]{3})([\-\. ])([0-9]{4})$/;
        let re= /^([A-Za-z0-9\.\-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
        if(re.test(em.value) && p.test(ph.value))
        {
            console.log("correct");
            return true;
        }
        else
        {
            alert("Please Check your E-Mail or Phone No.");
            return false;
        }
    }
}








function passwordChanged() {
    var strength = document.getElementById('strength');
    var strongRegex = new RegExp("^(?=.{13,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var mediumRegex = new RegExp("^(?=.{10,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
    var enoughRegex = /(?=.{8,}).*/;
    var pwd = document.getElementById("pass");
    if (pwd.value.length == 0) {
        strength.innerHTML = 'Type Password';
    } else if (false == enoughRegex.test(pwd.value)) {
        strength.innerHTML = 'More Characters';
    } else if (strongRegex.test(pwd.value)) {
        strength.innerHTML = '<span style="color:green">Strong!</span>';
    } else if (mediumRegex.test(pwd.value)) {
        strength.innerHTML = '<span style="color:orange">Medium!</span>';
    } else {
        strength.innerHTML = '<span style="color:red">Weak!</span>';
    }
}





// function selection()
// {
//     var cs=[
//         [
//             '1'[
//                 ['','State/Province'],
//                 ['AL','Alabama'],
//                 ['AK','Alaska'],
//                 ['AZ','Arizona'],
//                 ['CA','California']
//             ]
//         ],
//         [
//             '2'[
//                 ['','States/UT'],
//                 ['ND','NewDelhi'],
//                 ['MZ','Mizoram'],
//                 ['GJ','Gujarath'],
//                 ['KL','Kerala'],
//                 ['LK','Ladakh'],
//                 ['TN','TamilNadu']
//             ]
//         ],
        
//         [  '3'[
//                 ['','States/Provinces'],
//                 ['TY','Tokyo'],
//                 ['NK','Nagasakhi'],
//                 ['HS','Hiroshima']
//             ]
//         ]
//     ];
//     var ce= document.getElementById("country");
//     var se= document.getElementById("state");
//     var sle= document.getElementById("sl");
//     var sfe= document.getElementById("sf");

//     if (ce && se)
//     {
//         var los=[
//             ['xx','None']
//         ];
//         var cc = ce.options[ce.selectedIndex].value;
//         for(var i=0; i<cs.length; i++)
//         {
//             if(cc== cs[i][0])
//             {
//                 los=cs[i][1];
//             }
//         }
//         if(los.length < 0)
//         {
//             sfe.style.display="none";
//         }
//         else
//         {
//             sfe.style.display="Inline-block";
//         }
//         var ss;
//         for(var i=0; i<se.length; i++)
//         {
//             if(se.options[i].selected == true)
//             {
//                 ss=se.options[i].value;
//             }
//         }
//         se.options.length=0;
//         for(var i=0; i<los.length; i++)
//         {
//             se.options[i] = new Option(los[i][1], los[i][0]);
//             if(los[i][0] == ss)
//             {
//                 se.options[i].selected=true;
//             }
//         }
//     }
// }
