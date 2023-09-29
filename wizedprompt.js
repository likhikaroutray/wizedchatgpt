$(document).ready(function () {

    /** start code to append risk CMS collection item descriptin to hidden form field #risk-desc on change of #Risk select field**/
    var selectElement = $("#Risk");
    $(".collection-item.w-dyn-item").each(function () {
      var div = $(this).find("div");
      var text = div.text();
      var riskDesc = div.attr("risk-desc");
      
      
      var option = $("<option>", {
        value: text,
        text: text,
        "risk-desc": riskDesc
      });
      selectElement.append(option);
    });
    
    function updateHiddenSelect() {
      var selectedOption = $("#Risk option:selected");
      var riskDesc = selectedOption.attr("risk-desc");
      if (riskDesc) {
        $("#risk-desc").html('<option value="' + riskDesc + '">' + riskDesc + '</option>');
      } else {
        $("#risk-desc").empty();
      }
    }
     updateHiddenSelect();

     $("#Risk").change(function () {
      updateHiddenSelect(); 
  
    });
   /** end code to append risk CMS collection item descriptin to hidden form field #risk-desc on change of #Risk select field**/
  
/** start of code to replace {{}} words with user input that matches the field name on form submit
    function updateText() {
      var textToReplace = $("div[data-prompt='prompt']").html();
  
    
      textToReplace = textToReplace.replace(/{{(.*?)}}/g, function (match, fieldName) {

        var $inputField = $('[name="' + fieldName.trim() + '"]');
   
        var value = $inputField.val();

        if (value !== undefined && value !== null) {
          return value;
        } else {

          return match;
        }
      });
  
  
      $("div[data-prompt='prompt']").html(textToReplace);
      $("#prompt-input").val(textToReplace);
    }
  
    $("#wf-form-Age").on("submit", function (event) {
      event.preventDefault(); 
      updateText(); 
    });

    /** start of code to replace {{}} words with user input that matches the field name **/

  });


});
