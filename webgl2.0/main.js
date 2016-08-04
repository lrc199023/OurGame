const CGE = { VERSION:'01' };
CGE.AttribTypeCount = 0;
CGE.MapTypeCount = 0;
CGE.UniformCount = 0;
CGE.GLMAT_EPSILON = 0.000001;
Object.assign( CGE, {
    AttribType : {
        POSITION            : CGE.AttribTypeCount++,
        NORMAL              : CGE.AttribTypeCount++,
        TANGENT             : CGE.AttribTypeCount++,
        BINORMAL            : CGE.AttribTypeCount++,
        COLOR               : CGE.AttribTypeCount++,
        TEXCOORD0           : CGE.AttribTypeCount++,
        TEXCOORD1           : CGE.AttribTypeCount++,
        TEXCOORD2           : CGE.AttribTypeCount++,
        TEXCOORD3           : CGE.AttribTypeCount++,
        TEXCOORD4           : CGE.AttribTypeCount++,
    },

    MapType : {
        DIFFUSE             : CGE.MapTypeCount++,
        NORMAL              : CGE.MapTypeCount++,
        SPECULAR            : CGE.MapTypeCount++,
        BUMP                : CGE.MapTypeCount++,
        DEPTH               : CGE.MapTypeCount++,
        OTHER0              : CGE.MapTypeCount++,
        OTHER1              : CGE.MapTypeCount++,
        OTHER2              : CGE.MapTypeCount++,
        OTHER3              : CGE.MapTypeCount++,
        OTHER4              : CGE.MapTypeCount++,
    },

    UniformType : {
        //W : world, 
        //M : model, 
        //V : view, 
        //P : projection
        WMatrix                     : CGE.UniformCount++,
        MVMatrix                    : CGE.UniformCount++,
        MVPMatrix                   : CGE.UniformCount++,
        NormalWMatrix               : CGE.UniformCount++,
        NormalMVMatrix              : CGE.UniformCount++,
        NormalMVPMatrix             : CGE.UniformCount++,
        LightPosition               : CGE.UniformCount++,
        OTHER0                      : CGE.UniformCount++,
        OTHER1                      : CGE.UniformCount++,
        OTHER2                      : CGE.UniformCount++,
    },

    ZERO                           : 0,
    ONE                            : 1,
    SRC_COLOR                      : 0x0300,
    ONE_MINUS_SRC_COLOR            : 0x0301,
    SRC_ALPHA                      : 0x0302,
    ONE_MINUS_SRC_ALPHA            : 0x0303,
    DST_ALPHA                      : 0x0304,
    ONE_MINUS_DST_ALPHA            : 0x0305,

    DST_COLOR                      : 0x0306,
    ONE_MINUS_DST_COLOR            : 0x0307,
    SRC_ALPHA_SATURATE             : 0x0308,

    FUNC_ADD                       : 0x8006,
    BLEND_EQUATION                 : 0x8009,
    BLEND_EQUATION_RGB             : 0x8009,
    BLEND_EQUATION_ALPHA           : 0x883D,

    FUNC_SUBTRACT                  : 0x800A,
    FUNC_REVERSE_SUBTRACT          : 0x800B,

    BLEND_DST_RGB                  : 0x80C8,
    BLEND_SRC_RGB                  : 0x80C9,
    BLEND_DST_ALPHA                : 0x80CA,
    BLEND_SRC_ALPHA                : 0x80CB,
    ONE_MINUS_CONSTANT_COLOR       : 0x8002,
    CONSTANT_ALPHA                 : 0x8003,
    ONE_MINUS_CONSTANT_ALPHA       : 0x8004,
    BLEND_COLOR                    : 0x8005,

    BYTE                           : 0x1400,
    UNSIGNED_BYTE                  : 0x1401,
    SHORT                          : 0x1402,
    UNSIGNED_SHORT                 : 0x1403,
    INT                            : 0x1404,
    UNSIGNED_INT                   : 0x1405,
    FLOAT                          : 0x1406,


    DEPTH_ATTACHMENT               : 0x8D00,
    STENCIL_ATTACHMENT             : 0x8D20,
    DEPTH_STENCIL_ATTACHMENT       : 0x821A,
    COLOR_ATTACHMENT0              : 0x8CE0,
    COLOR_ATTACHMENT1              : 0x8CE1,
    COLOR_ATTACHMENT2              : 0x8CE2,
    COLOR_ATTACHMENT3              : 0x8CE3,
    COLOR_ATTACHMENT4              : 0x8CE4,
    COLOR_ATTACHMENT5              : 0x8CE5,
    COLOR_ATTACHMENT6              : 0x8CE6,
    COLOR_ATTACHMENT7              : 0x8CE7,
    COLOR_ATTACHMENT8              : 0x8CE8,
    COLOR_ATTACHMENT9              : 0x8CE9,
    COLOR_ATTACHMENT10             : 0x8CEA,
    COLOR_ATTACHMENT11             : 0x8CEB,
    COLOR_ATTACHMENT12             : 0x8CEC,
    COLOR_ATTACHMENT13             : 0x8CED,
    COLOR_ATTACHMENT14             : 0x8CEE,
    COLOR_ATTACHMENT15             : 0x8CEF,

    POINTS                         : 0x0000,
    LINES                          : 0x0001,
    LINE_LOOP                      : 0x0002,
    LINE_STRIP                     : 0x0003,
    TRIANGLES                      : 0x0004,
    TRIANGLE_STRIP                 : 0x0005,
    TRIANGLE_FAN                   : 0x0006,

    STREAM_DRAW                    : 0x88E0,
    STATIC_DRAW                    : 0x88E4,
    DYNAMIC_DRAW                   : 0x88E8,

    FLOAT_VEC2                     : 0x8B50,
    FLOAT_VEC3                     : 0x8B51,
    FLOAT_VEC4                     : 0x8B52,
    INT_VEC2                       : 0x8B53,
    INT_VEC3                       : 0x8B54,
    INT_VEC4                       : 0x8B55,
    BOOL                           : 0x8B56,
    BOOL_VEC2                      : 0x8B57,
    BOOL_VEC3                      : 0x8B58,
    BOOL_VEC4                      : 0x8B59,
    FLOAT_MAT2                     : 0x8B5A,
    FLOAT_MAT3                     : 0x8B5B,
    FLOAT_MAT4                     : 0x8B5C,
    FLOAT_MAT2x3                   : 0x8B65,
    FLOAT_MAT2x4                   : 0x8B66,
    FLOAT_MAT3x2                   : 0x8B67,
    FLOAT_MAT3x4                   : 0x8B68,
    FLOAT_MAT4x2                   : 0x8B69,
    FLOAT_MAT4x3                   : 0x8B6A,
    SAMPLER_2D                     : 0x8B5E,
    SAMPLER_3D                     : 0x8B5F,
    SAMPLER_CUBE                   : 0x8B60,
    SAMPLER_2D_SHADOW              : 0x8B62,

    DEPTH_COMPONENT                : 0x1902,
    ALPHA                          : 0x1906,
    RGB                            : 0x1907,
    RGBA                           : 0x1908,

    NEAREST                        : 0x2600,
    LINEAR                         : 0x2601,
    NEAREST_MIPMAP_NEAREST         : 0x2700,
    LINEAR_MIPMAP_NEAREST          : 0x2701,
    NEAREST_MIPMAP_LINEAR          : 0x2702,
    LINEAR_MIPMAP_LINEAR           : 0x2703,

    REPEAT                         : 0x2901,
    CLAMP_TO_EDGE                  : 0x812F,
    MIRRORED_REPEAT                : 0x8370,

    UNSIGNED_SHORT_4_4_4_4         : 0x8033,
    UNSIGNED_SHORT_5_5_5_1         : 0x8034,
    UNSIGNED_SHORT_5_6_5           : 0x8363,

    bufferGeometryCount : 0,
    materialCount : 0,
    textureCount : 0,
    shaderCount : 0,
    entityCount : 0,
    componentCount : 0,
});

//======================================= Math ===================================================
// TODO: Math have not completed;
// Most code copy to glMatrix.js;
// -------------- Vector3 ----------------
CGE.Vector3 = function(x, y, z) {
    Object.assign(this, {
        x: x || 0,
        y: y || 0,
        z: z || 0,
    });
};

CGE.Vector3.prototype.set = function(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    return this;
};

CGE.Vector3.prototype.add = function(vec) {
    this.x += vec.x;
    this.y += vec.y;
    this.z += vec.z;
    return this;
};

CGE.Vector3.prototype.sub = function(vec) {
    this.x -= vec.x;
    this.y -= vec.y;
    this.z -= vec.z;
    return this;
};

CGE.Vector3.prototype.dot = function(vec) {
    return this.x * vec.x + this.y * vec.y + this.z * vec.z;
};

CGE.Vector3.prototype.cross = function(vec3) {
    let ax = this.x, ay = this.y, az = this.z,
        bx = vec3.x, by = vec3.y, bz = vec3.z;
    let vec = new CGE.Vector3();
    vec.x = ay * bz - az * by;
    vec.y = az * bx - ax * bz;
    vec.z = ax * by - ay * bx;
    return vec;
};

CGE.Vector3.prototype.length = function() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z); 
};

CGE.Vector3.prototype.normalize = function() {
    let length = this.length();
    if (length == 0) return this;
    let length_inverse = 1.0 / length;
    this.x *= length_inverse;
    this.y *= length_inverse;
    this.z *= length_inverse;
    return this;
};

CGE.Vector3.prototype.applyMatrix4 = function(mat4) {
    let x = this.x, y = this.y, z = this.z;
    let m = mat4.data;
    this.x = m[0] * x + m[4] * y + m[8] * z + m[12];
    this.y = m[1] * x + m[5] * y + m[9] * z + m[13];
    this.z = m[2] * x + m[6] * y + m[10] * z + m[14];
    return this;
};

CGE.Vector3.prototype.applyQuaternion = function(quat) {
    let x = this.x, y = this.y, z = this.z,
        qx = quat.x, qy = quat.y, qz = quat.z, qw = quat.w;

    let ix = qw * x + qy * z - qz * y,
        iy = qw * y + qz * x - qx * z,
        iz = qw * z + qx * y - qy * x,
        iw = -qx * x - qy * y - qz * z;

    this.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
    this.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
    this.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;
    return this;
};

CGE.Vector3.prototype.clone = function() {
    let vec = new CGE.Vector3();
    vec.x = this.x;
    vec.y = this.y;
    vec.z = this.z;
    return vec;
};

// -------------- Vector4 ----------------

CGE.Vector4 = function() {
    Object.assign(this, {
        x: 0,
        y: 0,
        z: 0,
        w: 0,
    });
};

CGE.Vector4.prototype.set = function(x, y, z, w) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
    return this;
};

CGE.Vector4.prototype.normalize = function() {
    let x = this.x, y = this.y, z = this.z, w = this.w;
    let len = x*x + y*y + z*z + w*w;
    if (len > 0) {
        len = 1 / Math.sqrt(len);
        this.x = x * len;
        this.y = y * len;
        this.z = z * len;
        this.w = w * len;
    }
    return this;
};

CGE.Vector4.prototype.applyMatrix4 = function(mat4) {
    let x = this.x, y = this.y, z = this.z, w = this.w, m = mat4.data;
    this.x = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
    this.y = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
    this.z = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
    this.w = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
    return this;
};

CGE.Vector4.prototype.clone = function() {
    let vec4 = new CGE.Vector4();
    vec4.x = this.x;
    vec4.y = this.y;
    vec4.z = this.z;
    vec4.w = this.w;
    return vec4;
};

// -------------- Quaternion ----------------

CGE.Quaternion = function() {
    CGE.Vector4.call(this);
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.w = 1;
};

CGE.Quaternion.prototype = new CGE.Vector4();

CGE.Quaternion.prototype.identity = function() {
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.w = 1;
    return this;
};

CGE.Quaternion.prototype.multiply = function(quat) {
    let ax = this.x, ay = this.y, az = this.z, aw = this.w,
        bx = quat.x, by = quat.y, bz = quat.z, bw = quat.w;

    this.x = ax * bw + aw * bx + ay * bz - az * by;
    this.y = ay * bw + aw * by + az * bx - ax * bz;
    this.z = az * bw + aw * bz + ax * by - ay * bx;
    this.w = aw * bw - ax * bx - ay * by - az * bz;

    return this;
};

CGE.Quaternion.prototype.setAxisAngle = function(axis, rad) {
    rad = rad * 0.5;
    let s = Math.sin(rad);
    this.x = s * axis.x;
    this.y = s * axis.y;
    this.z = s * axis.z;
    this.w = Math.cos(rad);
    return this;
};

CGE.Quaternion.prototype.rotationTo = function(vec1, vec2) {
    let v1 = vec1.clone().normalize();
    let v2 = vec2.clone().normalize();
    let dot = v1.dot(v2);
    if (dot < -0.999999) {
        let tmpvec3 = new CGE.Vector3(1,0,0).cross(v1);
        if (tmpvec3.length() < 0.000001) {
            tmpvec3 = new CGE.Vector3(0,1,0).cross(v2);
        }
        tmpvec3.normalize();
        this.setAxisAngle(tmpvec3, Math.PI)
        return this;
    } else if (dot > 0.999999) {
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.w = 1;
        return this;
    } else {
        let tmpvec3 = v1.clone().cross(v2);
        this.x = tmpvec3.x;
        this.y = tmpvec3.y;
        this.z = tmpvec3.z;
        this.w = 1 + dot;
        this.normalize();
        return this;
    }
};

CGE.Quaternion.prototype.invert = function() {
    let a0 = this.x, a1 = this.y, a2 = this.z, a3 = this.w,
        dot = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3,
        invDot = dot ? 1.0 / dot : 0;
    
    // TODO: Would be waiting for glMatrix lib update;

    this.x = -a0 * invDot;
    this.y = -a1 * invDot;
    this.z = -a2 * invDot;
    this.w = a3 * invDot;

    return this;
};

CGE.Quaternion.prototype.setFromRotationMatrix = function(mat4) {
    // copy for THREE.js same function;
    let te = mat4.data,

        m11 = te[ 0 ], m12 = te[ 4 ], m13 = te[ 8 ],
        m21 = te[ 1 ], m22 = te[ 5 ], m23 = te[ 9 ],
        m31 = te[ 2 ], m32 = te[ 6 ], m33 = te[ 10 ],

        trace = m11 + m22 + m33,
        s;

    if ( trace > 0 ) {

        s = 0.5 / Math.sqrt( trace + 1.0 );

        this.w = 0.25 / s;
        this.x = ( m32 - m23 ) * s;
        this.y = ( m13 - m31 ) * s;
        this.z = ( m21 - m12 ) * s;

    } else if ( m11 > m22 && m11 > m33 ) {

        s = 2.0 * Math.sqrt( 1.0 + m11 - m22 - m33 );

        this.w = ( m32 - m23 ) / s;
        this.x = 0.25 * s;
        this.y = ( m12 + m21 ) / s;
        this.z = ( m13 + m31 ) / s;

    } else if ( m22 > m33 ) {

        s = 2.0 * Math.sqrt( 1.0 + m22 - m11 - m33 );

        this.w = ( m13 - m31 ) / s;
        this.x = ( m12 + m21 ) / s;
        this.y = 0.25 * s;
        this.z = ( m23 + m32 ) / s;

    } else {

        s = 2.0 * Math.sqrt( 1.0 + m33 - m11 - m22 );

        this.w = ( m21 - m12 ) / s;
        this.x = ( m13 + m31 ) / s;
        this.y = ( m23 + m32 ) / s;
        this.z = 0.25 * s;

    }

    return this;
};

// -------------- Matrix4 ----------------

CGE.Matrix4 = function() {
    this.data = new Float32Array([
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1,
    ]);
};

CGE.Matrix4.prototype.identity = function(position) {
    let m = this.data;

    m[0]    = 1; m[1]   = 0; m[2]   = 0; m[3]   = 0;
    m[4]    = 0; m[5]   = 1; m[6]   = 0; m[7]   = 0;
    m[8]    = 0; m[9]   = 0; m[10]  = 1; m[11]  = 0;
    m[12]   = 0; m[13]  = 0; m[14]  = 0; m[15]  = 1;

    return this;
};

CGE.Matrix4.prototype.translate = function(position) {
    let m = this.data;
    let x = position.x, y = position.y, z = position.z;

    m[12] += m[0] * x + m[4] * y + m[8] * z;
    m[13] += m[1] * x + m[5] * y + m[9] * z;
    m[14] += m[2] * x + m[6] * y + m[10] * z;
    m[15] += m[3] * x + m[7] * y + m[11] * z;

    return this;
};

CGE.Matrix4.prototype.setPosition = function(position) {
    let m = this.data;
    let x = position.x, y = position.y, z = position.z;

    m[12] = x;
    m[13] = y;
    m[14] = z;;

    return this;
};

CGE.Matrix4.prototype.rotate = function(axis, rad) {
    let m = this.data;
    let x = axis.x, y = axis.y, z = axis.z,
        len = Math.sqrt(x * x + y * y + z * z),
        s, c, t,
        a00, a01, a02, a03,
        a10, a11, a12, a13,
        a20, a21, a22, a23,
        b00, b01, b02,
        b10, b11, b12,
        b20, b21, b22;

    if (Math.abs(len) < CGE.GLMAT_EPSILON) { return null; }
    
    len = 1 / len;
    x *= len;
    y *= len;
    z *= len;

    s = Math.sin(rad);
    c = Math.cos(rad);
    t = 1 - c;

    a00 = m[0]; a01 = m[1]; a02 = m[2]; a03 = m[3];
    a10 = m[4]; a11 = m[5]; a12 = m[6]; a13 = m[7];
    a20 = m[8]; a21 = m[9]; a22 = m[10]; a23 = m[11];

    b00 = x * x * t + c; b01 = y * x * t + z * s; b02 = z * x * t - y * s;
    b10 = x * y * t - z * s; b11 = y * y * t + c; b12 = z * y * t + x * s;
    b20 = x * z * t + y * s; b21 = y * z * t - x * s; b22 = z * z * t + c;

    m[0] = a00 * b00 + a10 * b01 + a20 * b02;
    m[1] = a01 * b00 + a11 * b01 + a21 * b02;
    m[2] = a02 * b00 + a12 * b01 + a22 * b02;
    m[3] = a03 * b00 + a13 * b01 + a23 * b02;
    m[4] = a00 * b10 + a10 * b11 + a20 * b12;
    m[5] = a01 * b10 + a11 * b11 + a21 * b12;
    m[6] = a02 * b10 + a12 * b11 + a22 * b12;
    m[7] = a03 * b10 + a13 * b11 + a23 * b12;
    m[8] = a00 * b20 + a10 * b21 + a20 * b22;
    m[9] = a01 * b20 + a11 * b21 + a21 * b22;
    m[10] = a02 * b20 + a12 * b21 + a22 * b22;
    m[11] = a03 * b20 + a13 * b21 + a23 * b22;

    return this;
};

CGE.Matrix4.prototype.scale = function(v) {
    let m = this.data;

    m[0] *= v.x;
    m[1] *= v.x;
    m[2] *= v.x;
    m[3] *= v.x;

    m[4] *= v.y;
    m[5] *= v.y;
    m[6] *= v.y;
    m[7] *= v.y;

    m[8] *= v.z;
    m[9] *= v.z;
    m[10] *= v.z;
    m[11] *= v.z;

    return this;
};

CGE.Matrix4.prototype.transpose = function() {
    let m = this.data;
    let array = [
        m[0], m[4], m[8], m[12],
        m[1], m[5], m[9], m[13],
        m[2], m[6], m[10], m[14],
        m[3], m[7], m[11], m[15],
    ];
    this.data = array;
    return this;
};

CGE.Matrix4.prototype.identity = function() {
    let m = this.data;
    let a00 = m[0], a01 = m[1], a02 = m[2], a03 = m[3],
        a10 = m[4], a11 = m[5], a12 = m[6], a13 = m[7],
        a20 = m[8], a21 = m[9], a22 = m[10], a23 = m[11],
        a30 = m[12], a31 = m[13], a32 = m[14], a33 = m[15],

        b00 = a00 * a11 - a01 * a10,
        b01 = a00 * a12 - a02 * a10,
        b02 = a00 * a13 - a03 * a10,
        b03 = a01 * a12 - a02 * a11,
        b04 = a01 * a13 - a03 * a11,
        b05 = a02 * a13 - a03 * a12,
        b06 = a20 * a31 - a21 * a30,
        b07 = a20 * a32 - a22 * a30,
        b08 = a20 * a33 - a23 * a30,
        b09 = a21 * a32 - a22 * a31,
        b10 = a21 * a33 - a23 * a31,
        b11 = a22 * a33 - a23 * a32,

        det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

    if (!det) { 
        return null; 
    }
    det = 1.0 / det;

    m[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
    m[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
    m[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
    m[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
    m[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
    m[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
    m[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
    m[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
    m[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
    m[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
    m[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
    m[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
    m[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
    m[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
    m[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
    m[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;

    return this;
};

CGE.Matrix4.prototype.multiply = function(mat4) {
    let a = this.data, b = mat4.data;
    let a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

    let b0  = b[0], b1 = b[1], b2 = b[2], b3 = b[3];  
    a[0] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    a[1] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    a[2] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    a[3] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

    b0 = b[4]; b1 = b[5]; b2 = b[6]; b3 = b[7];
    a[4] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    a[5] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    a[6] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    a[7] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

    b0 = b[8]; b1 = b[9]; b2 = b[10]; b3 = b[11];
    a[8] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    a[9] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    a[10] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    a[11] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

    b0 = b[12]; b1 = b[13]; b2 = b[14]; b3 = b[15];
    a[12] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    a[13] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    a[14] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    a[15] = b0*a03 + b1*a13 + b2*a23 + b3*a33;
    return this;
};

CGE.Matrix4.prototype.applyMatrix4 = function(mat4) {
    return this.multiply(mat4);
};

CGE.Matrix4.prototype.lookAt = function(eye, center, up) {
    let vec_z = eye.clone().sub(center);
    vec_z.normalize();

    let vec_x = up.cross(vec_z);
    vec_x.normalize();

    let vec_y = vec_z.cross(vec_x);
    vec_y.normalize();

    let m = this.data;

    m[0] = vec_x.x;
    m[1] = vec_y.x;
    m[2] = vec_z.x;
    m[3] = 0;
    m[4] = vec_x.y;
    m[5] = vec_y.y;
    m[6] = vec_z.y;
    m[7] = 0;
    m[8] = vec_x.z;
    m[9] = vec_y.z;
    m[10] = vec_z.z;
    m[11] = 0;
    m[12] = 0;//-(x0 * eyex + x1 * eyey + x2 * eyez);
    m[13] = 0;//-(y0 * eyex + y1 * eyey + y2 * eyez);
    m[14] = 0;//-(z0 * eyex + z1 * eyey + z2 * eyez);
    m[15] = 1;

    let vec3 = eye.clone().applyMatrix4(this);

    m[12] = -vec3.x;
    m[13] = -vec3.y;
    m[14] = -vec3.z;

    return this;
};

CGE.Matrix4.prototype.perspective = function(fovy, aspect, near, far) {
    let f = 1.0 / Math.tan(fovy / 2), 
        nf = 1 / (near - far);
    this.data[0] = f / aspect;
    this.data[1] = 0;
    this.data[2] = 0;
    this.data[3] = 0;
    this.data[4] = 0;
    this.data[5] = f;
    this.data[6] = 0;
    this.data[7] = 0;
    this.data[8] = 0;
    this.data[9] = 0;
    this.data[10] = (far + near) * nf;
    this.data[11] = -1;
    this.data[12] = 0;
    this.data[13] = 0;
    this.data[14] = (2 * far * near) * nf;
    this.data[15] = 0;
    return this;
};

CGE.Matrix4.prototype.frustum = function(left, right, bottom, top, near, far) {
    let rl = 1 / (right - left),
        tb = 1 / (top - bottom),
        nf = 1 / (near - far);
    this.data[0] = (near * 2) * rl;
    this.data[1] = 0;
    this.data[2] = 0;
    this.data[3] = 0;
    this.data[4] = 0;
    this.data[5] = (near * 2) * tb;
    this.data[6] = 0;
    this.data[7] = 0;
    this.data[8] = (right + left) * rl;
    this.data[9] = (top + bottom) * tb;
    this.data[10] = (far + near) * nf;
    this.data[11] = -1;
    this.data[12] = 0;
    this.data[13] = 0;
    this.data[14] = (2 * far * near) * nf;
    this.data[15] = 0;
    return this;
};

CGE.Matrix4.prototype.ortho = function(left, right, bottom, top, near, far) {
    let lr = 1 / (left - right),
        bt = 1 / (bottom - top),
        nf = 1 / (near - far);
    this.data[0] = -2 * lr;
    this.data[1] = 0;
    this.data[2] = 0;
    this.data[3] = 0;
    this.data[4] = 0;
    this.data[5] = -2 * bt;
    this.data[6] = 0;
    this.data[7] = 0;
    this.data[8] = 0;
    this.data[9] = 0;
    this.data[10] = 2 * nf;
    this.data[11] = 0;
    this.data[12] = (left + right) * lr;
    this.data[13] = (top + bottom) * bt;
    this.data[14] = (far + near) * nf;
    this.data[15] = 1;
    return this;
};

CGE.Matrix4.prototype.makeForQuaternion = function(quat) {
    let m = this.data;
    let x = quat.x, y = quat.y, z = quat.z, w = quat.w,
        x2 = x + x,
        y2 = y + y,
        z2 = z + z,

        xx = x * x2,
        yx = y * x2,
        yy = y * y2,
        zx = z * x2,
        zy = z * y2,
        zz = z * z2,
        wx = w * x2,
        wy = w * y2,
        wz = w * z2;

    m[0] = 1 - yy - zz;
    m[1] = yx + wz;
    m[2] = zx - wy;
    m[3] = 0;

    m[4] = yx - wz;
    m[5] = 1 - xx - zz;
    m[6] = zy + wx;
    m[7] = 0;

    m[8] = zx + wy;
    m[9] = zy - wx;
    m[10] = 1 - xx - yy;
    m[11] = 0;

    m[12] = 0;
    m[13] = 0;
    m[14] = 0;
    m[15] = 1;

    return this;
};

CGE.Matrix4.prototype.determinant = function () {
    var te = this.data;

    var n11 = te[ 0 ], n12 = te[ 4 ], n13 = te[ 8 ], n14 = te[ 12 ];
    var n21 = te[ 1 ], n22 = te[ 5 ], n23 = te[ 9 ], n24 = te[ 13 ];
    var n31 = te[ 2 ], n32 = te[ 6 ], n33 = te[ 10 ], n34 = te[ 14 ];
    var n41 = te[ 3 ], n42 = te[ 7 ], n43 = te[ 11 ], n44 = te[ 15 ];

    //TODO: make this more efficient
    // copy to THREE.js;
    //( based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm )

    return (
        n41 * (
            + n14 * n23 * n32
             - n13 * n24 * n32
             - n14 * n22 * n33
             + n12 * n24 * n33
             + n13 * n22 * n34
             - n12 * n23 * n34
        ) +
        n42 * (
            + n11 * n23 * n34
             - n11 * n24 * n33
             + n14 * n21 * n33
             - n13 * n21 * n34
             + n13 * n24 * n31
             - n14 * n23 * n31
        ) +
        n43 * (
            + n11 * n24 * n32
             - n11 * n22 * n34
             - n14 * n21 * n32
             + n12 * n21 * n34
             + n14 * n22 * n31
             - n12 * n24 * n31
        ) +
        n44 * (
            - n13 * n22 * n31
             - n11 * n23 * n32
             + n11 * n22 * n33
             + n13 * n21 * n32
             - n12 * n21 * n33
             + n12 * n23 * n31
        )

    );
};

CGE.Matrix4.prototype.compose = function(position, quaternion, scale) {
    this.makeForQuaternion(quaternion);
    this.scale(scale);
    this.setPosition(position);
    return this;
};

CGE.Matrix4.prototype.decompose = function(position, quaternion, scale) {
    let vector = new CGE.Vector3();
    let matrix = new CGE.Matrix4();

    let te = this.data;

    let sx = vector.set( te[ 0 ], te[ 1 ], te[ 2 ] ).length();
    let sy = vector.set( te[ 4 ], te[ 5 ], te[ 6 ] ).length();
    let sz = vector.set( te[ 8 ], te[ 9 ], te[ 10 ] ).length();

    // if determine is negative, we need to invert one scale
    var det = this.determinant();
    if ( det < 0 ) {
        sx = - sx;
    }

    position.x = te[ 12 ];
    position.y = te[ 13 ];
    position.z = te[ 14 ];

    // scale the rotation part

    matrix.data.set( this.data ); // at this point matrix is incomplete so we can't use .copy()

    var invSX = 1 / sx;
    var invSY = 1 / sy;
    var invSZ = 1 / sz;

    matrix.data[ 0 ] *= invSX;
    matrix.data[ 1 ] *= invSX;
    matrix.data[ 2 ] *= invSX;

    matrix.data[ 4 ] *= invSY;
    matrix.data[ 5 ] *= invSY;
    matrix.data[ 6 ] *= invSY;

    matrix.data[ 8 ] *= invSZ;
    matrix.data[ 9 ] *= invSZ;
    matrix.data[ 10 ] *= invSZ;

    quaternion.setFromRotationMatrix( matrix );

    scale.x = sx;
    scale.y = sy;
    scale.z = sz;

    return this;
};

CGE.Matrix4.prototype.clone = function() {
    let mat4 = new CGE.Matrix4();
    mat4.data = this.data.copyWithin();
    return mat4;
};

//======================================= Component =========================================

CGE.Component = function() {
    Object.defineProperty(this, 'id', {writable: false, value: CGE.componentCount++});
};

CGE.Component.prototype.update = function() {

};

//======================================= BufferGeometry =========================================

CGE.BufferGeometry = function() {
    Object.defineProperty(this, 'id', {writable: false, value: CGE.bufferGeometryCount++});
    this.needUpdate = 0;
    this.attributeDatas = [];
    this.indexData = undefined;
    this.drawParameter = undefined;

    let updateVersion = 0;
    this.needsUpdate = function() {
        updateVersion++;
    };

    this.getUpdateVersion = function(version) {
        return updateVersion;
    };
};

CGE.BufferGeometry.prototype.createAttributeParam = function() {
    return {
        data : undefined,
        size : 0,
        type : undefined,
        stride : 0,
        attribPointers : [],
    };
};

CGE.BufferGeometry.prototype.addSingleAttribute = function(name, attribute, num, type, data, usage) {
    let attributeData = {
        usage: usage || CGE.STATIC_DRAW,
        data: data,
        size: 1,
        type: type,
        stride: 0,
        attribPointers: [],
    };
    attributeData.attribPointers.push({
        name : name,
        attribute : attribute,
        num : num,
        offset : 0,
    });
    this.attributeDatas.push(attributeData);
};

CGE.BufferGeometry.prototype.addMultiAttribute = function(attributeParameters, type, stride, data, usage) {
    let attributeData = {
        usage: usage || CGE.STATIC_DRAW,
        data: data,
        size: attributeParameters.length,
        type: type,
        stride: stride,
        attribPointers: [],
    };
    attributeParameters.forEach(function(param) {
        attributeData.attribPointers.push({
            name : param.name,
            attribute : param.attribute,
            num : param.num,
            offset : param.offset,
        });
    });
    this.attributeDatas.push(attributeData);
};

CGE.BufferGeometry.prototype.setIndexData = function(data, type, usage) {
    this.indexData = {
        data : data,
        type : type || CGE.UNSIGNED_SHORT,
        usage : usage || CGE.STATIC_DRAW,
    };
};

CGE.BufferGeometry.prototype.setDrawParameter = function(mode, count, offset) {
    this.drawParameter = {
        mode : mode,
        count : count,
        offset : offset,
    };
};

//======================================= Shader =========================================

CGE.Shader = function() {
    Object.defineProperty(this, 'id', {writable: false, value: CGE.shaderCount++});
    this.vertexShaderText = '';
    this.fragmentShaderText = '';
    this.requireAttributeLocations = new Map();
    this.requireUniformNames = new Map();
    this.requireTextureNames = new Map();
    this.requireRenderLocarions = new Map();

    let updateVersion = 0;
    this.needsUpdate = function() {
        updateVersion++;
    };

    this.getUpdateVersion = function(version) {
        return updateVersion;
    };
};

CGE.Shader.prototype.setShaderText = function(vs, fs) {
    this.vertexShaderText = vs;
    this.fragmentShaderText = fs;
};

CGE.Shader.prototype.addAttribLocation = function(attribType, location) {
    this.requireAttributeLocations.set(attribType, location);
};

CGE.Shader.prototype.addAttribLocations = function(array) {
    array.forEach(function(object){
        this.requireAttributeLocations.set(object.type, object.location);
    });
};

CGE.Shader.prototype.getAttribLocation = function(attribType) {
    return this.requireAttributeLocations.get(attribType);
};

CGE.Shader.prototype.addUniformName = function(uniformType, name) {
    this.requireUniformNames.set(uniformType, name);
};

CGE.Shader.prototype.addUniformNames = function(array) {
    array.forEach(function(object){
        this.requireUniformNames.set(object.type, object.name);
    });
};

CGE.Shader.prototype.getUniformName = function(uniformType) {
    return this.requireUniformNames.get(uniformType);
};

CGE.Shader.prototype.addTextureName = function(mapType, name) {
    this.requireTextureNames.set(mapType, name);
};

CGE.Shader.prototype.addTextureNames = function(array) {
    array.forEach(function(object){
        this.requireTextureNames.set(object.type, object.name);
    });
};

CGE.Shader.prototype.getTextureName = function(mapType) {
    return this.requireTextureNames.get(mapType);
};

CGE.Shader.prototype.addRenderLocation = function(renderType, location) {
    this.requireRenderLocarions.set(renderType, location);
};

CGE.Shader.prototype.addRenderLocation = function(array) {
    array.forEach(function(object){
        this.requireRenderLocarions.set(object.type, object.location);
    });
};

CGE.Shader.prototype.getRenderLocation = function(renderType) {
    return this.requireRenderLocarions.get(renderType);
};

//======================================= Texture2d =========================================

CGE.Texture = function() {
    Object.defineProperty(this, 'id', {writable: false, value: CGE.textureCount++});
    Object.assign(this, {
        minFilter : CGE.LINEAR,
        magFilter : CGE.LINEAR,
    });
    let updateVersion = 0;
    this.needsUpdate = function() {
        updateVersion++;
    };

    this.getUpdateVersion = function(version) {
        return updateVersion;
    };
};

CGE.Texture2d = function() {
    CGE.Texture.call(this);
    Object.assign(this, {
        wrapS : CGE.CLAMP_TO_EDGE,
        wrapT : CGE.CLAMP_TO_EDGE,
    });
    this.img = undefined;
    this.isLoad = false;
    this.format = CGE.RGB;
    this.internalformat = CGE.RGB;
    this.type = CGE.UNSIGNED_BYTE;
    this.width = 0;
    this.height = 0;
};

CGE.Texture2d.prototype = new CGE.Texture();

CGE.Texture2d.prototype.setImageSrc = function(src) {
    let img = new Image()
    img.onload = function() {
        this.isLoad = true;
        // TODO: cull image size;
    }.bind(this);
    img.src = src;
    this.img = img;
};

CGE.Texture2d.prototype.setSize = function(width, height) {
    this.width = width;
    this.height = height;
};

//======================================= Material =========================================

CGE.Material = function() {
    Object.defineProperty(this, 'id', {writable: false, value: CGE.materialCount++});
    Object.assign(this, {
        shaderData : undefined,
    });
};

CGE.Material.prototype.setShader = function(shaderData) {
    this.shaderData = shaderData;
};

CGE.Material.prototype.getMapRequests = function() {
    return [];
};

CGE.BaseMaterial = function() {
    CGE.Material.call(this);
    Object.assign(this, {
       diffuseMap : undefined,
    });
};

CGE.BaseMaterial.prototype = new CGE.Material();

CGE.BaseMaterial.prototype.setDiffuseMap = function(map) {
    this.diffuseMap = map;
};

CGE.BaseMaterial.prototype.getMapRequests = function() {
    return [
        {
            map: this.diffuseMap,
            mapType: CGE.MapType.DIFFUSE,
        },
    ];
};

//======================================= Transform =========================================

CGE.Transform = function(position, rotate, scale) {
    CGE.Component.call(this);
    Object.assign(this, {
        position: position || new CGE.Vector3(),
        rotate: rotate || new CGE.Quaternion(),
        scale: scale || new CGE.Vector3(),
        matrix: new CGE.Matrix4(),
        needsUpdate: true,
    });
    this.makeMatrix();
};

CGE.Transform.prototype = new CGE.Component();

CGE.Transform.prototype.setNeedUpdateMatrix = function() {
    this.needsUpdate = true;
};

CGE.Transform.prototype.update = function() {
    this.makeMatrix();
};

CGE.Transform.prototype.setPosition = function(position) {
    this.position.set(position.x, position.y, position.z);
    this.setNeedUpdateMatrix();
};

CGE.Transform.prototype.getPosition = function() {
    return this.position;
};

CGE.Transform.prototype.setRotate = function(rotate) {
    this.rotate.set(position.x, position.y, position.z, rotate.w);
    this.setNeedUpdateMatrix();
};

CGE.Transform.prototype.getRotate = function() {
    return this.rotate;
};

CGE.Transform.prototype.setScale = function(scale) {
    this.scale.set(scale.x, scale.y, scale.z);
    this.setNeedUpdateMatrix();
};

CGE.Transform.prototype.getScale = function() {
    return this.scale;
};

CGE.Transform.prototype.getMatrix = function() {
    this.makeMatrix();
    return this.matrix;
};

CGE.Transform.prototype.makeMatrix = function() {
    if (this.needsUpdate) {
        this.matrix.compose(this.position, this.rotate, this.scale);
        this.needsUpdate = false;
    }
};

CGE.Transform.prototype.decompose = function() {
    this.matrix.decompose(this.position, this.rotate, this.scale);
};

CGE.Transform.prototype.applyMatrix4 = function(mat4) {
    this.matrix.applyMatrix4(mat4);
    this.decompose();
};

//======================================= Mesh =========================================

CGE.Mesh = function(geometry, material) {
    CGE.Component.call(this);
    Object.assign(this, {
        geometry: geometry,
        material: material,
        transform: new CGE.Transform(),
    });
};

CGE.Mesh.prototype = new CGE.Component();

//======================================= Camera =========================================

CGE.Camera = function() {
    // TODO: apply component;
    CGE.Transform.call(this);
    Object.assign(this, {
        zFar: 2000.0,
        zNear: 0.1,
        projection: new CGE.Matrix4(),
        eye: new CGE.Vector3(),
        center: new CGE.Vector3(),
        up: new CGE.Vector3(),
    });
};

Object.defineProperty(CGE.Camera, 'Ortho', {writable: false, value: 0});
Object.defineProperty(CGE.Camera, 'Perspective', {writable: false, value: 1});

CGE.Camera.prototype = new CGE.Transform();

CGE.Camera.prototype.getTransform = function() {
    return this.transform;
};

CGE.Camera.prototype.update = function() {
    this.makeProjectionMatrix();
};

CGE.Camera.prototype.makeProjectionMatrix = function() {

};

CGE.Camera.prototype.getViewProjectionMatrix = function() {
    let mat4 = this.projection.clone();
    mat4.applyMatrix4(this.transform.getMatrix());
    return mat4;
};

CGE.Camera.prototype.applyMatrix4 = function(mat4) {
    CGE.Transform.call(this);
    this.eye.applyMatrix4(mat4);
    this.center.applyMatrix4(mat4);
    this.up.applyMatrix4(mat4);
};

CGE.Camera.prototype.lookAt = function(eye, center, up) {
    this.transform.getMatrix().lookAt(eye, center, up);
};

CGE.OrthoCamera = function(left, right, bottom, top, near, far) {
    CGE.Camera.call(this);
    Object.assign(this, {
        type: CGE.Camera.Ortho,
        far: far || 2000.0,
        near: near || 0.1,
        left: left, 
        right: right, 
        bottom: bottom, 
        top: top,
    });
    this.updateProjectionMatrix();
};

CGE.OrthoCamera.prototype = new CGE.Camera();

CGE.OrthoCamera.prototype.makeProjectionMatrix = function() {
    this.projection.ortho(this.left, this.right, this.bottom, this.top, this.near, this.far);
};

CGE.PerspectiveCamera = function(fov, aspect, near, far) {
    CGE.Camera.call(this);
    Object.assign(this, {
        type: CGE.Camera.Perspective,
        far: far || 2000.0,
        near: near || 0.1,
        fovy: fov,
        aspect: aspect,
    });
    this.updateProjectionMatrix();
};

CGE.PerspectiveCamera.prototype = new CGE.Camera();

CGE.PerspectiveCamera.prototype.makeProjectionMatrix = function() {
    this.projection.perspective(this.fov, this.aspect, this.near, this.far);
};

//======================================= Entity =========================================

CGE.Entity = function() {
    Object.defineProperty(this, 'id', {writable: false, value: CGE.entityCount++});
    Object.assign(this, {
        components : [],
    });
    this.addComponent = function(component) {
        if (component instanceof CGE.Component) {
            this.components.push(component);
        }
    };
};

//======================================= WebGL2Renderer =========================================

CGE.WebGL2Renderer = function() {
    /// TODO: The Function name MUST use '_' inital that all called _gl function;

    let _canvas = document.createElement('canvas');
    let _gl = _canvas.getContext('webgl2');

    if (_gl === undefined) {
        alert('Can not use webgl 2.0');
        return undefined;
    }

    let max_fps = 60;
    let isClearColor = true;
    let isClearDepth = true;
    let isClearStencil = false;

    let initializedBufferMap = new Map();
    let initialisedShaderMap = new Map();
    let initialisedTextureMap = new Map();

    this.setSize = function(width, height) {
        _canvas.width = width;
        _canvas.height = height;
        _gl.viewport(0, 0, width, height);
    };

    this.setOffset = function(offsetX, offsetY) {
        _gl.viewport(offsetX, offsetY, _canvas.width, _canvas.height);
    };

    this.setClearColor = function(r, g, b, a) {
        _gl.clearColor(r, g, b, a);
    };

    this.getCanvas = function() {
        return _canvas;
    };

    this.clear = function(color, depth, stencil) {
        _gl.clear(
            (color ? _gl.COLOR_BUFFER_BIT : 0) |
            (depth ? _gl.DEPTH_BUFFER_BIT : 0) |
            (stencil ? _gl.STENCIL_BUFFER_BIT : 0)
        );
    };

    let vertexBufferData = function() {
        Object.assign(this, {

        });
    };

    let GeometryDraw = function(mode, offset, count, type) {
        Object.assign(this, {
            mode: mode,
            offset: offset,
            count: count,
            type: type,
        });
    };
    GeometryDraw.prototype.apply = function() {
        _gl.drawArrays(this.mode, this.offset, this.count);
    };

    let GeometryDrawWithIndex = function(mode, offset, count, type) {
        GeometryDraw.call(this, mode, offset, count, type);
    };
    GeometryDrawWithIndex.prototype = new GeometryDraw();

    GeometryDrawWithIndex.prototype.apply = function() {
        _gl.drawElements(this.mode, this.count, this.type, this.offset);
    };

    let shaderProgram = function(shader, shaderData, mapLocations, uniformLocations) {
        this.program = shader;
        this.shaderData = shaderData;
        this.mapLocations = mapLocations;
        this.uniformLocations = uniformLocations;
    };

    shaderProgram.prototype.useShaderProgram = function() {
        _gl.useProgram(this.program);
    };

    shaderProgram.prototype.getShaderProgram = function() {
        return this.program;
    };

    shaderProgram.prototype.getMapLocation = function(mapType) {
        return this.mapLocations.get(mapType);
    };

    shaderProgram.prototype.getUniformLocation = function(uniformType) {
        return this.uniformLocations.get(uniformType);
    };

    let texture2D = function(texture, minFilter, magFilter, wrapS, wrapT) {
        Object.assign(this, {
            texture: texture,
            minFilter: minFilter,
            magFilter: magFilter,
            wrapS: wrapS,
            wrapT: wrapT,
        });
    };

    texture2D.prototype.apply = function(index) {
        _gl.activeTexture(_gl.TEXTURE0 + index);
        _gl.bindTexture(_gl.TEXTURE_2D, this.texture);
        _gl.texParameteri(_gl.TEXTURE_2D, _gl.TEXTURE_MIN_FILTER, this.minFilter);
        _gl.texParameteri(_gl.TEXTURE_2D, _gl.TEXTURE_MAG_FILTER, this.magFilter);
        _gl.texParameteri(_gl.TEXTURE_2D, _gl.TEXTURE_WRAP_S, this.wrapS);
        _gl.texParameteri(_gl.TEXTURE_2D, _gl.TEXTURE_WRAP_T, this.wrapT);
    };

    this.loadVertexData = function(vertexData) {
        let data = initializedBufferMap.get(vertexData.id);
        if (data !== undefined && data.localVersion === vertexData.getUpdateVersion()) 
            return data.buffer;
        if (vertexData.attributeDatas.length === 0) 
            return undefined;

        let vbos = [];
        let ibo = undefined;
        let draw = undefined;

        let drawParameter = vertexData.drawParameter;
        vertexData.attributeDatas.forEach(function(attribute){
            let vbo = _gl.createBuffer();
            _gl.bindBuffer(_gl.ARRAY_BUFFER, vbo);
            _gl.bufferData(_gl.ARRAY_BUFFER, attribute.data, attribute.usage);
            _gl.bindBuffer(_gl.ARRAY_BUFFER, null);
            vbos.push(vbo);
        });
        if (vertexData.indexData) {
            ibo = _gl.createBuffer();
            _gl.bindBuffer(_gl.ELEMENT_ARRAY_BUFFER, ibo);
            _gl.bufferData(_gl.ELEMENT_ARRAY_BUFFER, vertexData.indexData.data, vertexData.indexData.usage);
            _gl.bindBuffer(_gl.ELEMENT_ARRAY_BUFFER, null);
            draw = new GeometryDrawWithIndex(drawParameter.mode, drawParameter.offset, drawParameter.count, vertexData.indexData.type);
        } else {
            draw = new GeometryDraw(drawParameter.mode, drawParameter.offset, drawParameter.count, 0);
        }

        let bufferData = {
            vbos: vbos,
            ibo: ibo,
            vao: undefined,
            draw: draw,
            vertexData: vertexData,
        };
        initializedBufferMap.set(vertexData.id, {buffer:bufferData, localVersion:vertexData.getUpdateVersion()});
        return bufferData;
    };

    this.bufferGeometryDraw = function(bufferData, material) {
        if (bufferData.vao === undefined) {
            let vao = _gl.createVertexArray();
            _gl.bindVertexArray(vao);
            let shader = material.shader;
            for (let i = 0; i < bufferData.vbos.length; i++) {
                let attribute = bufferData.vertexData.attributeDatas[i];
                let vbo = bufferData.vbos[i];
                _gl.bindBuffer(_gl.ARRAY_BUFFER, vbo);
                attribute.attribPointers.forEach(function(param){
                    let location = shader.shaderData.getAttribLocation(param.attribute);
                    if (location === undefined) 
                        return; 
                    _gl.enableVertexAttribArray(location);
                    _gl.vertexAttribPointer(location, param.num, attribute.type, false, attribute.stride, param.offset);
                });
            }
            if (bufferData.ibo) {
                _gl.bindBuffer(_gl.ELEMENT_ARRAY_BUFFER, bufferData.ibo);
            }
            _gl.bindVertexArray(null);
            bufferData.vao = vao;
        }

        /// TODO: remove _gl
        _gl.bindVertexArray(bufferData.vao);
        bufferData.draw.apply();
    };

    this.loadShaderData = function(shaderData) {
        let data = initialisedShaderMap.get(shaderData.id);
        if (data !== undefined && data.localVersion === shaderData.getUpdateVersion()) 
            return data.program;

        let vs = _gl.createShader(_gl.VERTEX_SHADER);
        _gl.shaderSource(vs, shaderData.vertexShaderText);
        _gl.compileShader(vs);
        if (_gl.getShaderParameter(vs, _gl.COMPILE_STATUS) == 0) {
            console.error(shaderData.vertexShaderText);
            console.error(_gl.getShaderInfoLog(vs));
            _gl.deleteShader(vs);
            return undefined;
        }
          
        let fs = _gl.createShader(_gl.FRAGMENT_SHADER);
        _gl.shaderSource(fs, shaderData.fragmentShaderText);
        _gl.compileShader(fs);
        if (_gl.getShaderParameter(fs, _gl.COMPILE_STATUS) == 0) {
            console.error(shaderData.fragmentShaderText);
            console.error(_gl.getShaderInfoLog(fs));
            _gl.deleteShader(vs);
            _gl.deleteShader(fs);
            return undefined;
        }

        let program = _gl.createProgram();
        _gl.attachShader(program, vs);
        _gl.attachShader(program, fs);

        _gl.linkProgram(program);

        if (!_gl.getProgramParameter(program, _gl.LINK_STATUS)) {
            console.error("Could not initialise shaders shader " + _gl.getProgramInfoLog(shader));
        }

        _gl.deleteShader(vs);
        _gl.deleteShader(fs);

        let mapLocations = new Map();
        shaderData.requireTextureNames.forEach(function(value, key) {
            let location = _gl.getUniformLocation(program, value);
            mapLocations.set(key, location);
        });

        let uniformLocations = new Map();
        shaderData.requireUniformNames.forEach(function(value, key) {
            let location = _gl.getUniformLocation(program, value);
            uniformLocations.set(key, location);
        });

        let sProgram = new shaderProgram(program, shaderData, mapLocations, uniformLocations);

        initialisedShaderMap.set(shaderData.id, {
            program: sProgram, 
            localVersion: shaderData.getUpdateVersion(),
        });
        return sProgram;
    };  

    this.loadTexture2DData = function(textureData) {
        let data = initialisedTextureMap.get(textureData.id);
        if (data !== undefined && data.localVersion === textureData.getUpdateVersion()) 
            return data.texture;
        let format = textureData.format;
        let internalformat = textureData.internalformat;
        let type = textureData.type;
        let texture = undefined;
        if (textureData.img !== undefined && textureData.isLoad) {
            texture = _gl.createTexture();
            _gl.bindTexture(_gl.TEXTURE_2D, texture);
            _gl.texImage2D(_gl.TEXTURE_2D, 0, internalformat, format, type, textureData.img);
        } else if (textureData.width !== 0 && textureData.height !== 0) {
            texture = _gl.createTexture();
            _gl.bindTexture(_gl.TEXTURE_2D, texture);
            _gl.texImage2D(gl.TEXTURE_2D, 0, internalformat, textureData.width, textureData.height, 0, format, type, null);
        } else {
            return undefined;
        }

        let textureObj = new texture2D(texture, textureData.minFilter, textureData.magFilter, textureData.wrapS, textureData.wrapT);

        let textureInnerData = {
            texture: textureObj,
            localVersion: textureData.getUpdateVersion(),
        };

        initialisedTextureMap.set(textureData.id, textureInnerData);
        return textureObj;
    };

    this.applyMaterial = function(materialData) {
        let shader = this.loadShaderData(materialData.shaderData);
        if (!shader) {
            return undefined;
        }
        shader.useShaderProgram();
        let requestsMapTypes = materialData.getMapRequests();
        for (let i = 0; i < requestsMapTypes.length; i++) {
            let texture = this.loadTexture2DData(requestsMapTypes[i].map);
            if (!texture) 
                return undefined;
            let mapType = requestsMapTypes[i].mapType;
            let location = shader.getMapLocation(mapType);
            texture.apply(i);
            _gl.uniform1i(location, i);
        }

        return {
            shader: shader,
        };
    };

    this.renderSingle = function(vertexData, materialData) {
        this.clear(isClearColor, isClearDepth, isClearStencil);
        let material = this.applyMaterial(materialData);
        if (!material) {
            return;
        }
        let buffer = this.loadVertexData(vertexData);
        if (!buffer) {
            return;
        }
        this.bufferGeometryDraw(buffer, material);
    };

    this.render = function(scene, camera) {

    };
};
