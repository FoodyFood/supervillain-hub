code=`curl -o /dev/null -s -w "%{http_code}\n" http://supervillain:8080/index.html`
if [ $code == "200" ] 
then
    echo "curl success: supervillain: /index.html page"
else
    echo "curl fail: supervillain: /index.html page"
    exit 1
fi

