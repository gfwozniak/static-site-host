function initBuffers(gl) {
  const positionBuffer = initPositionBuffer(gl);
  const textureCoordBuffer = initTextureBuffer(gl);
  const indexBuffer = initIndexBuffer(gl);
  const darknessBuffer = initDarknessBuffer(gl);

  return {
    position: positionBuffer,
    textureCoord: textureCoordBuffer,
    indices: indexBuffer,
    darkness: darknessBuffer,
  };
}

function initPositionBuffer(gl) {
  // Create a buffer for the square's positions.
  const positionBuffer = gl.createBuffer();

  // Select the positionBuffer as the one to apply buffer
  // operations to from here out.
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

  // Now create an array of positions for the square.
  const positions =[
     0,  0,  1,
    -1,  0,  0,
     0,  1,  0,

     0,  0,  1,
     1,  0,  0,
     0, -1,  0,

     0,  0,  1,
     0,  1,  0,
     1,  0,  0,

     0,  0,  1,
     0, -1,  0,
    -1,  0,  0,

     0,  0, -1,
     0,  1,  0,
    -1,  0,  0,

     0,  0, -1,
     0, -1,  0,
     1,  0,  0,

     0,  0, -1,
     1,  0,  0,
     0,  1,  0,

     0,  0, -1,
    -1,  0,  0,
     0, -1,  0,
  ];


  // Now pass the list of positions into WebGL to build the
  // shape. We do this by creating a Float32Array from the
  // JavaScript array, then use it to fill the current buffer.
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

  return positionBuffer;
}

function initDarknessBuffer(gl) {

  const darknessBuffer = gl.createBuffer();

  gl.bindBuffer(gl.ARRAY_BUFFER, darknessBuffer);

  const darkness =[
     0.0,  0.0,  0.0, 
     0.0,  0.0,  0.0, 
     1.0,  1.0,  1.0, 
     1.0,  1.0,  1.0, 
     1.0,  1.0,  1.0, 
     1.0,  1.0,  1.0, 
     0.0,  0.0,  0.0, 
     0.0,  0.0,  0.0, 
  ];

  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(darkness), gl.STATIC_DRAW);

  return darknessBuffer;
}

function initColorBuffer(gl) {
  const faceColors = [
    [1.0, 1.0, 1.0, 1.0], // Front face: white
    [1.0, 0.0, 0.0, 1.0], // Back face: red
    [0.0, 1.0, 0.0, 1.0], // Top face: green
    [0.0, 0.0, 1.0, 1.0], // Bottom face: blue
    [1.0, 1.0, 0.0, 1.0], // Right face: yellow
    [1.0, 0.0, 1.0, 1.0], // Left face: purple
    [0.0, 1.0, 0.0, 1.0], // Top face: green
    [0.0, 0.0, 1.0, 1.0], // Bottom face: blue
  ];

  let colors = [];

  for (const c of faceColors) {
    colors = colors.concat(c, c, c);
  }

  const colorBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);

  return colorBuffer;
}

function initIndexBuffer(gl) {
  const indexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);

  // This array defines each face as two triangles, using the
  // indices into the vertex array to specify each triangle's
  // position.

  // prettier-ignore
  const indices = [
     0,  1,  2,      
     3,  4,  5,   
     6,  7,  8,   
     9,  10, 11,
     12, 13, 14,
     15, 16, 17,
     18, 19, 20,
     21, 22, 23,
  ];

  // Now send the element array to GL

  gl.bufferData(
    gl.ELEMENT_ARRAY_BUFFER,
    new Uint16Array(indices),
    gl.STATIC_DRAW,
  );

  return indexBuffer;
}

function initTextureBuffer(gl) {
  const textureCoordBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, textureCoordBuffer);

  //const vertexCoord = [ 
  //  0.0, 0.0,
  //  1.0, 0.0,
  //  0.0, 1.0,
  //]

  //let textureCoordinates = [];

  //for (let i = 0; i < 8; ++i) {
  //  textureCoordinates = textureCoordinates.concat(vertexCoord);
  //}
  let textureCoordinates = [
    0.5, 0.5,
    0.0, 0.5,
    0.5, 1.0,

    0.5, 0.5,
    1.0, 0.5,
    0.5, 0.0,

    0.5, 0.5,
    0.5, 1.0,
    1.0, 0.5,

    0.5, 0.5,
    0.5, 0.0,
    0.0, 0.5,

    0.0, 1.0,
    0.5, 1.0,
    0.0, 0.5,

    1.0, 0.0,
    0.5, 0.0,
    1.0, 0.5,

    1.0, 1.0,
    1.0, 0.5,
    0.5, 1.0,

    0.0, 0.0,
    0.0, 0.5,
    0.5, 0.0,

  ]

  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array(textureCoordinates),
    gl.STATIC_DRAW,
  );

  return textureCoordBuffer;
}

export { initBuffers };
