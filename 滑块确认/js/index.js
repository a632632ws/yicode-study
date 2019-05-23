   var golo  = document.querySelector(".golo"),
            box = document.querySelector(".box ")
            bg = document.querySelector(".bg");
            goloWidth = golo.offsetWidth,
            boxWidth = box.offsetWidth,
            count = box.offsetWidth - golo.offsetWidth-2,   //因为加了边框的原因    不知道企业这个地方怎么 设置的 因为用固定值肯定不好 

              //用正则验证账号密码
            int = document.querySelector("#int"),
            int1 = document.querySelector("#int1"),
            st  = document.querySelector(".st"),
            flag = false;
            
        

        golo.onmousedown = function (e){
            var initL = e.clientX;
            document.onmousemove = function(e){
                var moveL = e.clientX;
                var left = moveL - initL;
               
                //判断界限
               left = Math.max(left,0);
               console.log(left );
               if (left >= count){
                   left = count
               }
            //    left = Math.min(left,count);
          
               //和二为1 了
                golo.style.left = bg.style.width=left + "px";
    
                if (left == count){
                    document.onmousemove = null;
                    flag = true
                }else{
                    flag = false
                }
             
            //  让bg的宽度随便移动的距离来增加
                //bg.style.width = left + "px";
            
            }
            
        }
        document.onmouseup=function (){
            document.onmousemove = null;
        }


       

       //1.用户名验证
       int.onblur = function (){
        //设置正则 用来判断
        var regUser = /^\w{6,12}$/;     //  重点: 这里一定要加先限位符   要不然 你value 超过12位了 但是你满足了他的6-10的数了了 也会提示正确;

        if(regUser.test(this.value)){    //用正则的test()方法验证;
            this.nextElementSibling.innerHTML = "您输入的用户名正确";
            flag = true;
        }else {
            this.nextElementSibling.innerHTML = "您输入的用户名错误";
            flag = false;
        }
    }

     //1.密码验证
     int1.onblur = function (){
        //设置正则 用来判断
        var regPaw = /^\w{6,12}$/;     //  重点: 这里一定要加先限位符   要不然 你value 超过12位了 但是你满足了他的6-10的数了了 也会提示正确;

        if(regPaw.test(this.value)){    //用正则的test()方法验证;
            this.nextElementSibling.innerHTML = "您输入的密码正确";
            flag = true;
        }else {
            this.nextElementSibling.innerHTML = "您输入的密码错误";
            flag = false;
        }
    }



    st.onclick = function (e){
        if (!flag){
            e.preventDefault();
        }
        
    }


    