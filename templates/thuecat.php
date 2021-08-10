<script>
    function doSomething(success){
        console.log(success)
    }

    fetch('https://cdb.thuecat.org/api/search/resources?nodeId=262483019699-jqtx&api_key=4b711f1c-346a-477d-8b92-a01bb14cde9f')
        .then(data => data.json())
        .then(success => doSomething(success));
</script>