function ready()
           {
                var target = document.getElementsByClassName('lazzy-iframe');
                
                for(var i = 0; i < target.length; i++)
                {
                    var src = target[i].getAttribute('src');
                    target[i].setAttribute('src',src);
                }
           }