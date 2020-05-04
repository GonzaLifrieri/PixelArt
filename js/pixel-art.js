var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');
var paleta = $("#paleta");
var grillaPixeles = $("#grilla-pixeles");
var presionado = false;

function generarPaletaDeColores(){
    for(let j = 0; j < nombreColores.length; j++){
      paleta.append('<div class="color-paleta" id="paleta-'+j+'">');
      var div = $("div.color-paleta#paleta-"+j);
      div.css({"background-color": nombreColores[j]});
    }
}
function generarGrillaDePixeles(){
    for(let i = 0; i < 1751; i++){
      grillaPixeles.append('<div>');
  }
}

colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    $("#indicador-de-color").css({"background-color": colorActual});
  })
);
$(document).ready(function(){
  generarGrillaDePixeles();
  generarPaletaDeColores();
  $("#paleta div.color-paleta").click(function(){
    var colorSeleccionado = $(this).css("background-color");
    $("#indicador-de-color").css({"background-color": colorSeleccionado});
  })
  $("#grilla-pixeles div").click(function(){
    var colorParaPintar = $("#indicador-de-color").css("background-color");
    $(this).css({"background-color": colorParaPintar});
  })
  $("#grilla-pixeles div").mousedown(function(){
    presionado = true;
  })
    $("#grilla-pixeles div").mouseup(function(){
      presionado = false;
  })
  $("#grilla-pixeles div").mouseover(function(){
    if(presionado){
      var colorParaPintar = $("#indicador-de-color").css("background-color");
    $(this).css({"background-color": colorParaPintar});
    }
  })
  $("#borrar").click(function(){
      $("#grilla-pixeles div").animate({"background-color" : "white"},1200);
  })
  $("#batman").click(function(){
    cargarSuperheroe(batman)
  })
  $("#wonder").click(function(){
    cargarSuperheroe(wonder)
  })
  $("#flash").click(function(){
    cargarSuperheroe(flash)
  })
  $("#invisible").click(function(){
    cargarSuperheroe(invisible)
  })
  $("#guardar").click(function(){
    guardarPixelArt()
  })
})