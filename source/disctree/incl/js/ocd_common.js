

/* ScreenShot() takes three arguments:
   X is the width of the screenshot that is to be shown.
   Y is the height of the screenshot to be shown.
   source is the path to the screenshot.

It also measures the resolution of the screen. If the screen is as large or larger
than the screenshot to be shown, ScreenShot() pops up a window that big. If the
screen is smaller than the screenshot, ScreenShot() pops up a window as large as
the screen itself, and enables scroll bars.*/

function ScreenShot(ShotX, ShotY, source){
   // Width and Height of new window;
   var ChildX, ChildY;
   // User can resize/scroll new window?  Default no.
   var resizability = "no";
   var scrollable = "no";
   // Available width and height in pixels -- doesn't count task bar.
   var ScreenX = screen.availWidth;
   var ScreenY = screen.availHeight;
    var buffer = 20;
    
   // Scrollbars appear even if explicitly disabled unless the new window
   // is at least 16 pixels wider than the screenshot in both dimensions.
   // The scrollbars themselves are 16 px.  Could be a moz bug.
   // If the window would bigger than or equal to the screensize after these
   // pixels are added, instead use the screen dimensions minus 100 and make
   // the window resizeable and scrollable.
   if ((ShotX + buffer) >= ScreenX){
      ChildX = ScreenX - 100;
      resizability = "yes";
      scrollable = "yes";
   } else { ChildX = ShotX + buffer;  }
   
   if ((ShotY + buffer) >= ScreenY){
      ChildY = ScreenY - 100;
      resizability = "yes";
      scrollable = "yes";
   } else { ChildY = ShotY + buffer; }

   // Assemble the list of features of the window.
   features = "resizable="+resizability;
   features += ",scrollbars="+scrollable;
   features += ",width="+ChildX;
   features += ",height="+ChildY;

   source_line = '<img border="0" alt="image" src="'+source+'" /></a></div>';

   // Open the window.
   // window.open(source, "Thumbnail", features);
   screen_window = window.open("", "Screen Capture Image", features);
    screen_window.document.write("<html><title>Screen Capture Image</title>");
    screen_window.document.write("<body bgcolor='gray' onblur=window.close()>");
    screen_window.document.write('<div style="display:block" class="screen_block">');
    screen_window.document.write('<div class="thumb_frame"><a href="javascript:window.close();">');  
    screen_window.document.write(source_line);
    screen_window.document.write("</div></body></html>");

// If you just want to open an existing HTML page in the 
// new window, you can replace win()'s coding above with:
// window.open("page.html","","height=200,width=200,left=300,top=100");
}

/*PositionWindow() measures the resolution of the host screen, and uses that information to center the
browser on the screen.  NOTE: check to see if it's possible to make K-Meleon do this itself, so that the
screen doesn't shift noticeably on start.  This is called from the onLoad event.*/

function PositionWindow(){
   var Width, Height, xPos, yPos;
   Width = screen.width;
   Height = screen.height;
   xPos = (Width - 640) / 2;
   yPos = (Height - 480) / 2;
   window.moveTo(xPos, yPos);
}

/* LangWindow() opens the language selection window */
function PickLanguage()
{
window.open('../include/PickLanguage.html','mywindow','width=300,height=300,top=100,resizable=yes,scrollbars=yes');
}

// Jump to a given page
function JumpToPage(Language){
    var OldURL = String(self.opener.location);
    var FileName = GetFileName(OldURL);
    var PageURL = '';
    PageURL = PageURL.concat('../',Language,'/',FileName);
//    alert(PageURL);
	self.opener.location = PageURL;
	self.close();
	}

// Strips the FileName out of a URL
function GetFileName (FullURL){
    SubStrings = FullURL.split("/");
    return SubStrings[SubStrings.length-1];
    }

/* InfoWindow */
function OpenInfoWindow()
{
window.open('../include/InfoWindow.html','About','width=600,height=550,top=100,resizable=yes,scrollbars=yes');
}

function ExitProg()
{
// Ask for confirmation
 var where_to= confirm("You are about to exit the CD browser. Click OK to exit.");
 if (where_to== true)
 {
   window.close();
 }
}
