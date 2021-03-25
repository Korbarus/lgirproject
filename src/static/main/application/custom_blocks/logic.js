
//Appending the Set block to the workspace
// Block Definition
Blockly.Blocks["set"] = {
  init: function() {

    //Initiating the Set block and its tooltip

    this.jsonInit(customBlocks.set);
    var thisBlock = this;
    this.setTooltip(function() {
      return 'Add a number to variable "%1".'.replace('%1',
          thisBlock.getFieldValue('VAR'));
    });
  }
};

//Appending the Value_of block to the workspace
// Block Definition
Blockly.Blocks["value_of"] = {
  init: function() {

    //Initiating the Set block and its tooltip
    this.jsonInit(customBlocks.value_of);
    var thisBlock = this;
    this.setTooltip(function() {
      return 'Add a number to variable "%1".'.replace('%1',
          thisBlock.getFieldValue('VAR'));
    });
  }
};

// Block Definition
var blocklyGetComponentBlock = 
Blockly.Blocks['get'] = {
  init: function() {
    this.jsonInit(customBlocks.get);
    var thisBlock = this;
    this.setTooltip(function() {
      return 'Add a number to variable "%1".'.replace('%1',
          thisBlock.getFieldValue('VAR'));
    });
  }
};

// Block Definition
Blockly.Blocks['input_component'] = {
  init: function() {
    this.jsonInit(customBlocks.input_component);
    var thisBlock = this;
    this.setTooltip(function() {
      return 'Add a number to variable "%1".'.replace('%1',
          thisBlock.getFieldValue('VAR'));
    });
  }
};

// Block Definition
Blockly.Blocks['pin_component'] = {
  init: function() {
    this.jsonInit(customBlocks.pin_component);
    var thisBlock = this;
    this.setTooltip(function() {
      return 'This is a pin on your virtual circuitboard.';
    });
  }
};
  
// Block Definition
Blockly.Blocks['output_component'] = {
  init: function() {
    this.jsonInit(customBlocks.output_component);
    var thisBlock = this;
    this.setTooltip(function() {
      return 'Add a number to variable "%1".'.replace('%1',
          thisBlock.getFieldValue('VAR'));
    });
  }
};

// Block Definition
Blockly.JavaScript['block_type'] = function(block) {
  var dropdown_speed = block.getFieldValue('speed');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

// Block Definition
Blockly.Blocks['add'] = {
  init: function() {
    this.jsonInit(customBlocks.add);
    var thisBlock = this;
    this.setTooltip(function() {
      return 'Add a number to variable "%1".'.replace('%1',
          thisBlock.getFieldValue('VAR'));
    });
  }
};

// JavaScript Gen Stub
Blockly.JavaScript['set'] = function(block) {
  var value_component = Blockly.JavaScript.valueToCode(block, 'COMPONENT', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "..."
  return code;
};

// Python Gen Stub - COMPLETE
Blockly.Python['set'] = function(block) {
  var value_component = Blockly.Python.valueToCode(block, 'COMPONENT', Blockly.Python.ORDER_ATOMIC);
  var value_value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC);
  var code = value_component + " = " + value_value;
  return code;
};
  
  
// JavaScript Gen Stub
  Blockly.JavaScript['component'] = function(block) {
    var dropdown_component_type_select = block.getFieldValue('COMPONENT_TYPE_SELECT');
    var number_component_instance_select = block.getFieldValue('COMPONENT_INSTANCE_SELECT');
    // TODO: Assemble JavaScript into code variable.
    var code = '...';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  // Python Gen Stub
  Blockly.Python['component'] = function(block) {
    var dropdown_component_type_select = block.getFieldValue('COMPONENT_TYPE_SELECT');
    var number_component_instance_select = block.getFieldValue('COMPONENT_INSTANCE_SELECT');
    // TODO: Assemble JavaScript into code variable.
    var code = '...';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };

  // JavaScript Gen Stub
  Blockly.JavaScript['input_component'] = function(block) {
    var dropdown_component_type_select = block.getFieldValue('COMPONENT_TYPE_SELECT');
    var number_component_instance_select = block.getFieldValue('COMPONENT_INSTANCE_SELECT');
    // TODO: Assemble JavaScript into code variable.
    var code = '...';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  
  // Python Gen Stub
  Blockly.Python['input_component'] = function(block) {
    var dropdown_component_type_select = block.getFieldValue('COMPONENT_TYPE_SELECT');
    var number_component_instance_select = block.getFieldValue('COMPONENT_INSTANCE_SELECT');
    // TODO: Assemble JavaScript into code variable.
    var code = '...';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };

// Block Definition
Blockly.Blocks['speed'] = {
  init: function() {
    this.jsonInit(customBlocks.speed);
    var thisBlock = this;
    this.setTooltip(function() {
      return 'Sets the speed of a component Used with motors.';
    });
  }
};
// JavaScript Gen Stub
  Blockly.JavaScript['speed'] = function(block) {
    var speed_dropdown = block.getFieldValue('SPEED_SELECT');
    var value = Blockly.JavaScript.valueToCode(speed_dropdown);
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");

    if(value = "Fast"){
      x = 80;
    }
    else if(value = "Medium"){
      x = 50;
    }
    else{
      x = 20;
    }
  
    return x;
  };

  // Python Gen Stub - COMPLETE
  Blockly.Python['speed'] = function(block) {
    var speed_dropdown = block.getFieldValue('SPEED_SELECT');
    var value = Blockly.Python.valueToCode(speed_dropdown);
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    if(value = "Fast"){
      x = 80;
    }
    else if(value = "Medium"){
      x = 50;
    }
    else{
      x = 20;
    }
  
    return x;
  };

// Block Definition - COMPLETE
Blockly.Blocks['wait'] = {
  init: function() {
    this.jsonInit(customBlocks.wait);
    var thisBlock = this;
    this.setTooltip(function() {
      return 'Tells the component to sleep for a specified number of seconds.';
    });
  }
};
// JavaScript Gen stub - COMPLETE
  Blockly.JavaScript['wait'] = function(block) {
    var delay_dropdown = block.getFieldValue('WAIT_TIME')
    var wait_code = 'Wait(' + delay_dropdown + ');\n';
    return wait_code;
  };
  
// Python Gen Stub - COMPLETE
  Blockly.Python['wait'] = function(block) {
    var delay_dropdown = block.getFieldValue('WAIT_TIME')
    var wait_code = 'time.sleep(' + delay_dropdown + ');\n';
    return wait_code;
  };


// Block Definition - COMPLETE
Blockly.Blocks['ON_or_OFF'] = {
  init: function() {
    this.jsonInit(customBlocks.ON_or_OFF);
    var thisBlock = this;
    this.setTooltip(function() {
      return 'Returns an on, off, or half signal.';
    });
  }
};

// JavaScript Gen Stub - COMPLETE
Blockly.JavaScript['ON_or_OFF'] = function(block) {
  var state_dropdown = block.getFieldValue('SPEED_SELECT');
  var value = Blockly.JavaScript.valueToCode(state_dropdown);
  var x;
  if(value = "ON"){
    x = 100;
  }
  else if(value = "OFF"){
    x = 0;
  }
  else{
    x = 50;
  }

  return x;
};

// Python Gen Stub - COMPLETE
Blockly.Python['ON_or_OFF'] = function(block) {
  var state_dropdown = block.getFieldValue('SPEED_SELECT');
  var value = Blockly.Python.valueToCode(state_dropdown);
  var x;
  if(value = "ON"){
    x = 100;
  }
  else if(value = "OFF"){
    x = 0;
  }
  else{
    x = 50;
  }

  return x;
};

// Block Definition - COMPLETE
Blockly.Blocks['Brightness'] = {
  init: function() {
    this.jsonInit(customBlocks.Brightness);
    var thisBlock = this;
    this.setTooltip(function() {
      return 'Sets the brightness of a LED component.';
    });
  }
};
// JavaScript Gen Stub - COMPLETE
Blockly.JavaScript['Brightness'] = function(block) {
  var light_dropdown = block.getFieldValue('LIGHT_SELECT');
  var value = Blockly.JavaScript.valueToCode(light_dropdown);
  var x;
  if(value = "BRIGHT"){
    x = 80;
  }
  else if (value = "DIM"){
    x = 20;
  }
  return x;
};

// Python Gen Stub - COMPLETE
Blockly.Python['Brightness'] = function(block) {
  var light_dropdown = block.getFieldValue('LIGHT_SELECT');
  var value = Blockly.Python.valueToCode(light_dropdown);
  var x;
  if(value = "BRIGHT"){
    x = 80;
  }
  else if (value = "DIM"){
    x = 20;
  }
  else{
    return ('Please input a valid option and try again!');
  }
  return x;
};


/*
Blockly.Blocks['0 to 100'] = {
  init: function() {
    var validator = function(newValue) {
      return newValue;
    };

    this.appendDummyInput()
    .appendField('Range: ')
    .appendField(new Blockly.FieldNumber('//range number to be inserted//', validator)),
    this.setConstraints(0, 100);
  }
};
*/

