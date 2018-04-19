<!DOCTYPE html>
<html>

    <head>
        <title>Question_1</title>
        <link rel="stylesheet" type="text/css" href="Aii.css">
    </head>

    <body>

        <br/><br/>
        <form enctype="multipart/form-data" action="convert.php" method="POST">
            <input type="hidden" name="MAX_FILE_SIZE" value="30000" />
            Upload: <input name="userfile" type="file" />
            <input type="submit" value="Send File" />
        </form>

        <br/>
        <h3>Table content using XML DOM and JS :</h3>
        <br/>
        <table id="table" align="center">
        </table>
        <br/>

        <script type="text/javascript" src="Aii.js"></script>

    </body>

</html>
