'use strict';
const CGE = { VERSION:'02' };
CGE.Logger = {
    info: function(message) {
        console.log(message);
    },

    warn: function(message) {
        console.warn(message);
    },

    error: function(message) {
        console.error(message);
    },
};
CGE.GLMAT_EPSILON = 0.000001;
CGE.getTypeCount = function() {
    let TypeCount = 0;
    return function getTypeCount() {
        return TypeCount++;
    };
}();
Object.assign( CGE, {
    AttribType : {
        POSITION            : CGE.getTypeCount(),
        NORMAL              : CGE.getTypeCount(),
        TANGENT             : CGE.getTypeCount(),
        BINORMAL            : CGE.getTypeCount(),
        COLOR               : CGE.getTypeCount(),
        TEXCOORD0           : CGE.getTypeCount(),
        TEXCOORD1           : CGE.getTypeCount(),
        TEXCOORD2           : CGE.getTypeCount(),
        TEXCOORD3           : CGE.getTypeCount(),
        TEXCOORD4           : CGE.getTypeCount(),
    },

    MapType : {
        DIFFUSE             : CGE.getTypeCount(),
        NORMAL              : CGE.getTypeCount(),
        SPECULAR            : CGE.getTypeCount(),
        BUMP                : CGE.getTypeCount(),
        DEPTH               : CGE.getTypeCount(),
        AMBIENT             : CGE.getTypeCount(),
        OTHER0              : CGE.getTypeCount(),
        OTHER1              : CGE.getTypeCount(),
        OTHER2              : CGE.getTypeCount(),
        OTHER3              : CGE.getTypeCount(),
        OTHER4              : CGE.getTypeCount(),
    },

    MatrixType: {
        //W : world, 
        //M : model, // eqrt world
        //V : view, 
        //P : projection
        WMatrix                     : CGE.getTypeCount(),
        VMatrix                     : CGE.getTypeCount(),
        PMatrix                     : CGE.getTypeCount(),
        MVMatrix                    : CGE.getTypeCount(),
        MVPMatrix                   : CGE.getTypeCount(),
        NormalWMatrix               : CGE.getTypeCount(),
        NormalMVMatrix              : CGE.getTypeCount(),
        NormalMVPMatrix             : CGE.getTypeCount(),
        InverseWMatrix              : CGE.getTypeCount(),
        InverseVMatrix              : CGE.getTypeCount(),
        InversePMatrix              : CGE.getTypeCount(),
    },

    UniformType: {
        COLOR                       : CGE.getTypeCount(),
        LightPosition               : CGE.getTypeCount(),
        LightPosition01             : CGE.getTypeCount(),
        LightPosition02             : CGE.getTypeCount(),
        LightPosition03             : CGE.getTypeCount(),
        LightPosition04             : CGE.getTypeCount(),
        OTHER0                      : CGE.getTypeCount(),
        OTHER1                      : CGE.getTypeCount(),
        OTHER2                      : CGE.getTypeCount(),
    },

    ComponentType: {
        Transform                   : CGE.getTypeCount(),
        Geometry                    : CGE.getTypeCount(),
        Material                    : CGE.getTypeCount(),
        Camera                      : CGE.getTypeCount(),
        Light                       : CGE.getTypeCount(),
    },

    renderTargetLocation: {
        COLOR                       : 0,
        NORMAL                      : 1,
        DEPTH                       : 2,
        // TODO: Add more render target type;
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
    UNSIGNED_INT_24_8              : 0x84FA,

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
    DEPTH_STENCIL                  : 0x84F9,

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

    ObjectCount: 0,
});

//======================================= Math ===================================================
// TODO: Math have not completed;
// Most code copy to glMatrix.js;
// TODO: Adding Euler sopport later;
// -------------- Vector3 ----------------
CGE.Vector3 = function(x, y, z) {
    Object.assign(this, {
        x: x || 0,
        y: y || 0,
        z: z || 0,
    });
};

Object.assign(CGE.Vector3.prototype, {
    constructor: CGE.Vector3,

    set: function(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        return this;
    },

    add: function(vec) {
        this.x += vec.x;
        this.y += vec.y;
        this.z += vec.z;
        return this;
    },

    sub: function(vec) {
        this.x -= vec.x;
        this.y -= vec.y;
        this.z -= vec.z;
        return this;
    },

    negate: function() {
        this.x = -this.x;
        this.y = -this.y;
        this.z = -this.z;
        return this;
    },

    dot: function(vec) {
        return this.x * vec.x + this.y * vec.y + this.z * vec.z;
    },

    cross: function(vec3) {
        let ax = this.x, ay = this.y, az = this.z,
            bx = vec3.x, by = vec3.y, bz = vec3.z;
        let vec = new CGE.Vector3();
        vec.x = ay * bz - az * by;
        vec.y = az * bx - ax * bz;
        vec.z = ax * by - ay * bx;
        return vec;
    },

    length: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z); 
    },

    normalize: function() {
        let length = this.length();
        if (length == 0) return this;
        let length_inverse = 1.0 / length;
        this.x *= length_inverse;
        this.y *= length_inverse;
        this.z *= length_inverse;
        return this;
    },

    applyMatrix4: function(matrix) {
        let x = this.x, y = this.y, z = this.z;
        let m = matrix.data;
        this.x = m[0] * x + m[4] * y + m[8] * z + m[12];
        this.y = m[1] * x + m[5] * y + m[9] * z + m[13];
        this.z = m[2] * x + m[6] * y + m[10] * z + m[14];
        return this;
    },

    applyQuaternion: function(quat) {
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
    },

    clone: function() {
        let vec = new CGE.Vector3();
        vec.x = this.x;
        vec.y = this.y;
        vec.z = this.z;
        return vec;
    },

    copy: function(vec3) {
        this.x = vec3.x;
        this.y = vec3.y;
        this.z = vec3.z;
    },
});

// -------------- Vector4 ----------------

CGE.Vector4 = function(x, y, z, w) {
    Object.assign(this, {
        x: x || 0,
        y: y || 0,
        z: z || 0,
        w: w || 0,
    });
};

Object.assign(CGE.Vector4.prototype, {
    constructor: CGE.Vector4,

    set: function(x, y, z, w) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
        return this;
    },

    normalize: function() {
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
    },

    applyMatrix4: function(mat4) {
        let x = this.x, y = this.y, z = this.z, w = this.w, m = mat4.data;
        this.x = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
        this.y = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
        this.z = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
        this.w = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
        return this;
    },

    clone: function() {
        let vec4 = new CGE.Vector4();
        vec4.x = this.x;
        vec4.y = this.y;
        vec4.z = this.z;
        vec4.w = this.w;
        return vec4;
    },

    copy: function(v) {
        this.x = v.x;
        this.y = v.y;
        this.z = v.z;
        this.w = v.w;
    },
});

// -------------- Quaternion ----------------

CGE.Quaternion = function(x, y, z, w) {
    CGE.Vector4.call(this, x, y, z, w);
};

CGE.Quaternion.prototype = Object.assign(Object.create(CGE.Vector4.prototype), {
    constructor: CGE.Quaternion,

    identity: function() {
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.w = 1;
        return this;
    },

    multiply: function(quat) {
        let ax = this.x, ay = this.y, az = this.z, aw = this.w,
            bx = quat.x, by = quat.y, bz = quat.z, bw = quat.w;

        this.x = ax * bw + aw * bx + ay * bz - az * by;
        this.y = ay * bw + aw * by + az * bx - ax * bz;
        this.z = az * bw + aw * bz + ax * by - ay * bx;
        this.w = aw * bw - ax * bx - ay * by - az * bz;

        return this;
    },

    setAxisAngle: function(axis, rad) {
        rad = rad * 0.5;
        let s = Math.sin(rad);
        this.x = s * axis.x;
        this.y = s * axis.y;
        this.z = s * axis.z;
        this.w = Math.cos(rad);
        return this;
    },

    rotationTo: function(vec1, vec2) {
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
    },

    invert: function() {
        let a0 = this.x, a1 = this.y, a2 = this.z, a3 = this.w,
            dot = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3,
            invDot = dot ? 1.0 / dot : 0;
        
        // TODO: Would be waiting for glMatrix.js lib update;

        this.x = -a0 * invDot;
        this.y = -a1 * invDot;
        this.z = -a2 * invDot;
        this.w = a3 * invDot;

        return this;
    },

    setFromRotationMatrix: function(mat4) {
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
    },

    clone: function() {
        let vec4 = new CGE.Quaternion();
        vec4.x = this.x;
        vec4.y = this.y;
        vec4.z = this.z;
        vec4.w = this.w;
        return vec4;
    },
});

// -------------- Matrix4 ----------------

CGE.Matrix4 = function() {
    this.data = new Float32Array([
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1,
    ]);
};

Object.assign(CGE.Matrix4.prototype, {
    identity: function(position) {
        let m = this.data;
        m[0]    = 1; m[1]   = 0; m[2]   = 0; m[3]   = 0;
        m[4]    = 0; m[5]   = 1; m[6]   = 0; m[7]   = 0;
        m[8]    = 0; m[9]   = 0; m[10]  = 1; m[11]  = 0;
        m[12]   = 0; m[13]  = 0; m[14]  = 0; m[15]  = 1;
        return this;
    },

    translate: function(position) {
        let m = this.data;
        let x = position.x, y = position.y, z = position.z;
        m[12] += m[0] * x + m[4] * y + m[8] * z;
        m[13] += m[1] * x + m[5] * y + m[9] * z;
        m[14] += m[2] * x + m[6] * y + m[10] * z;
        m[15] += m[3] * x + m[7] * y + m[11] * z;
        return this;
    },

    setPosition: function(position) {
        let m = this.data;
        let x = position.x, y = position.y, z = position.z;
        m[12] = x;
        m[13] = y;
        m[14] = z;
        return this;
    },

    rotate: function(axis, rad) {
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
    },

    scale: function(v) {
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
    },

    transpose: function() {
        let m = this.data;
        let array = [
            m[0], m[4], m[8], m[12],
            m[1], m[5], m[9], m[13],
            m[2], m[6], m[10], m[14],
            m[3], m[7], m[11], m[15],
        ];
        this.data = array;
        return this;
    },

    invert: function() {
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
    },

    invertTranspose: function() {
        return this.transpose().invert();
    },

    multiply: function(matrix) {
        let a = this.data, b = matrix.data;
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
    },

    applyMatrix4: function(matrix) {
        return this.multiply(matrix);
    },

    lookAt: function(eye, center, up) {
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
    },

    perspective: function(fovy, aspect, near, far) {
        let f = 1.0 / Math.tan(fovy / 2), 
            nf = 1.0 / (near - far);
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
    },

    frustum: function(left, right, bottom, top, near, far) {
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
    },

    orthographic: function(left, right, bottom, top, near, far) {
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
    },

    makeForQuaternion: function(quat) {
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
    },

    determinant: function () {
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
    },

    compose: function(position, quaternion, scale) {
        this.makeForQuaternion(quaternion);
        this.scale(scale);
        this.setPosition(position);
        return this;
    },

    decompose: function(position, quaternion, scale) {
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

        matrix.data.set( this.data ); 
        // at this point matrix is incomplete so we can't use .copy()

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
    },

    makeBasis: function ( xAxis, yAxis, zAxis ) {
        this.data.set([
            xAxis.x, yAxis.x, zAxis.x, 0,
            xAxis.y, yAxis.y, zAxis.y, 0,
            xAxis.z, yAxis.z, zAxis.z, 0,
            0,       0,       0,       1
        ]);
        return this;
    },

    clone: function() {
        let mat4 = new CGE.Matrix4();
        mat4.data.set(this.data);
        return mat4;
    },

    copy: function(matrix) {
        this.data.set(matrix.data);
        return this;
    },
});

//======================================= Object =========================================

CGE.Object = function() {
    Object.defineProperty(this, 'id', {writable: false, value: CGE.ObjectCount++});
};

Object.assign(CGE.Object.prototype, {
    constructor: CGE.Object,
    update: function() {},
});

//======================================= VersionObject =========================================

CGE.VersionObject = function() {
    CGE.Object.call(this);

    let _updateVersion = 0;
    this.needsUpdate = function() {
        _updateVersion++;
    };

    this.getUpdateVersion = function(version) {
        return _updateVersion;
    };
};

CGE.VersionObject.prototype = Object.assign(Object.create(CGE.Object.prototype), {
    constructor: CGE.VersionObject,
});

//======================================= BufferGeometry =========================================

CGE.BufferGeometry = function() {
    CGE.VersionObject.call(this);
    Object.assign(this, {
        _attributeDatas: [],
        _indexData: undefined,
        _drawParameter: undefined,
    });
};

CGE.BufferGeometry.prototype = Object.assign(Object.create(CGE.VersionObject.prototype), {
    constructor: CGE.BufferGeometry,

    createAttributeParam: function() {
        return {
            data: undefined,
            size: 0,
            type: undefined,
            stride: 0,
            attribPointers: [],
            usage: undefined,
        };
    },

    addSingleAttribute: function(name, attribute, num, type, data, usage) {
        let attributeData = {
            data: data,
            size: 1,
            type: type,
            stride: 0,
            attribPointers: [],
            usage: usage || CGE.STATIC_DRAW,
        };
        attributeData.attribPointers.push({
            name: name,
            attribute: attribute,
            num: num,
            offset: 0,
        });
        this._attributeDatas.push(attributeData);
    },

    addMultiAttribute: function(attributeParameters, type, stride, data, usage) {
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
                name: param.name,
                attribute: param.attribute,
                num: param.num,
                offset: param.offset,
            });
        });
        this._attributeDatas.push(attributeData);
    },

    getAttributeDatas: function() {
        return this._attributeDatas;
    },

    setIndexData: function(data, type, usage) {
        this._indexData = {
            data: data,
            type: type || CGE.UNSIGNED_SHORT,
            usage: usage || CGE.STATIC_DRAW,
        };
    },

    getIndexData: function() {
        return this._indexData;
    },

    setDrawParameter: function(count, mode, offset) {
        this._drawParameter = {
            mode: mode || CGE.TRIANGLES,
            count: count || 0,
            offset: offset || 0,
        };
    },

    getDrawParameter: function() {
        return this._drawParameter;
    },

});

//======================================= Shader =========================================

CGE.Shader = function() {
    CGE.VersionObject.call(this);
    Object.assign(this, {
        _vertexShaderText: '',
        _fragmentShaderText: '',
        _requireAttributeLocations: new Map(),
        _requireMatrixNames: new Map(),
        _requireUniformNames: new Map(),
        _requireRenderLocarions: new Map(),
    });
};

CGE.Shader.prototype = Object.assign(Object.create(CGE.VersionObject.prototype), {
    constructor: CGE.Shader,

    setShaderText: function(vsText, fsText) {
        this._vertexShaderText = vsText;
        this._fragmentShaderText = fsText;
    },

    getVertexShaderText: function() {
        return this._vertexShaderText;
    },

    getFragmentShaderText: function() {
        return this._fragmentShaderText;
    },

    addAttribName: function(attribType, name) {
        this._requireAttributeLocations.set(attribType, name);
    },

    addAttribNames: function(array) {
        array.forEach(function(object){
            this._requireAttributeLocations.set(object.type, object.name);
        });
    },

    getAttribName: function(attribType) {
        return this._requireAttributeLocations.get(attribType);
    },

    getAttribNameMap: function() {
        return this._requireAttributeLocations;
    },

    _createUniformObject: function(name, type) {
        return {
            name: name,
            type: type || CGE.FLOAT_MAT4,
        };
    },

    addMatrixName: function(matrixType, name, dataType) {
        this._requireMatrixNames.set(matrixType, this._createUniformObject(name, dataType || CGE.FLOAT_MAT4));
    },

    getMatrixNameMap: function(uniformType) {
        return this._requireMatrixNames;
    },

    addUniformName: function(uniformType, name, dataType) {
        this._requireUniformNames.set(uniformType, this._createUniformObject(name, dataType));
    },

    addUniformNames: function(array) {
        array.forEach(function(object){
            this.addUniformName(object.type, object.name, object.type);
        });
    },

    getUniformName: function(uniformType) {
        return this._requireUniformNames.get(uniformType);
    },

    getUniformNameMap: function() {
        return this._requireUniformNames;
    },

    addTextureName: function(mapType, name) {
        this.addUniformName(mapType, name, CGE.UNSIGNED_INT);
    },

    addTextureNames: function(array) {
        array.forEach(function(object){
            this.addTextureName(object.type, object.name);
        });
    },

    getTextureName: function(mapType) {
        return this.getUniformName(mapType);
    },

    addRenderLocation: function(renderType, location) {
        this._requireRenderLocarions.set(renderType, location);
    },

    addRenderLocations: function(array) {
        array.forEach(function(object){
            this._requireRenderLocarions.set(object.type, object.location);
        });
    },

    getRenderLocation: function(renderType) {
        return this._requireRenderLocarions.get(renderType);
    },

    getRenderLocationMap: function() {
        return this._requireRenderLocarions;
    },
});

//======================================= Texture2d =========================================

CGE.Texture = function() {
    CGE.VersionObject.call(this);
    Object.assign(this, {
        _minFilter: CGE.LINEAR,
        _magFilter: CGE.LINEAR,
        _format: CGE.RGB,
        _internalformat: CGE.RGB,
        _type: CGE.UNSIGNED_BYTE,
        _mipmap: false,
    });
};

CGE.Texture.prototype = Object.assign(Object.create(CGE.VersionObject.prototype), {
    constructor: CGE.Texture,

    setFilter: function(min, mag) {
        this._minFilter = min || CGE.LINEAR;
        this._magFilter = mag || CGE.LINEAR;
    },

    getMinFilter: function() {
        return this._minFilter;
    },

    getMagFilter: function() {
        return this._magFilter;
    },

    setFormat: function(src, internal) {
        this._format = src || CGE.RGB;
        this._internalformat = internal || src || CGE.RGB;
    },

    getFormat: function() {
        return this._format;
    },

    getInternalformat: function() {
        return this._internalformat;
    },

    setType: function(type) {
        this._type = type;
    },

    getType: function() {
        return this._type;
    },

    setMipmap: function(value) {
        this._needMipmap = value === true;
    },

    getMipmap: function() {
        return this._needMipmap;
    },

});

CGE.Texture2d = function() {
    // TODO: Add another class to loading form img file;
    CGE.Texture.call(this);
    Object.assign(this, {
        _wrapS: CGE.CLAMP_TO_EDGE,
        _wrapT: CGE.CLAMP_TO_EDGE,
        _img: undefined,
        _isLoad: false,
        _width: 0,
        _height: 0,
    });
};

CGE.Texture2d.prototype = Object.assign(Object.create(CGE.Texture.prototype), {
    constructor: CGE.Texture2d,

    setImageSrc: function(src) {
        this._isLoad = false;
        let img = new Image()
        img.onload = function() {
            this._isLoad = true;
            // TODO: try to add culling image size;
        }.bind(this);
        img.src = src;
        this._img = img;
    },

    getImage: function() {
        return this._img;
    },

    getWidth: function() {
        return this._width;
    },

    getHeight: function() {
        return this._height;
    },

    setWarp: function(wrapS, wrapT) {
        this._wrapS = wrapS;
        this._wrapT = wrapT;
    },

    getWrapS: function() {
        return this._wrapS;
    },

    getWrapT: function() {
        return this._wrapT;
    },

    isLoad: function() {
        return this._isLoad;
    },

    setSize: function(width, height) {
        this._width = width;
        this._height = height;
        this.needsUpdate();
    },
});

Object.assign(CGE.Texture2d, {
    createFromeImage: function(imgSrc, mipmap) {
        let texture2d = new CGE.Texture2d();
        texture2d.setImageSrc(imgSrc);
        if (mipmap === true) {
            texture2d.setMipmap(true);
            texture2d.setFilter(CGE.LINEAR_MIPMAP_LINEAR, CGE.LINEAR);
        }
        return texture2d;
    },
});

//======================================= Texture2d =========================================

CGE.TextureCube = function() {
    CGE.Texture.call(this);
    Object.assign(this, {
        _wrapS: CGE.CLAMP_TO_EDGE,
        _wrapT: CGE.CLAMP_TO_EDGE,
        _texture2d: [undefined, undefined, undefined, undefined, undefined, undefined],
    });
};

CGE.TextureCube.prototype = Object.assign(Object.create(CGE.Texture.prototype), {
    constructor: CGE.TextureCube,

    setWarp: function(wrapS, wrapT) {
        this._wrapS = wrapS;
        this._wrapT = wrapT;
    },

    setTexture2ds: function(positiveX, negativeX, positiveY, negativeY, positiveZ, negativeZ) {
        this._texture2d[0] = positiveX || this._texture2d[0];
        this._texture2d[1] = negativeX || this._texture2d[1];
        this._texture2d[2] = positiveY || this._texture2d[2];
        this._texture2d[3] = negativeY || this._texture2d[3];
        this._texture2d[4] = positiveZ || this._texture2d[4];
        this._texture2d[5] = negativeZ || this._texture2d[5];
    },

    getTexture2ds: function(){
        return this._texture2d;
    },

    getWrapS: function() {
        return this._wrapS;
    },

    getWrapT: function() {
        return this._wrapT;
    },
});

//======================================= Material =========================================

CGE.Material = function() {
    CGE.Object.call(this);
    Object.assign(this, {
        _shader: undefined,
        // TODO: add rendering state support;
    });
};

CGE.Material.getPropertyDescriptor = function() {
    return {
        type: undefined, // this type is shader uniform type, NOT data type;
        data: undefined,
    };
};

CGE.Material.prototype = Object.assign(Object.create(CGE.Object.prototype), {
    constructor: CGE.Material,

    setShader: function(shader) {
        this._shader = shader;
    },

    getShader: function(shader) {
        return this._shader;
    },

    getMapProvide: function() {
        return [];
    },

    getPropertyProvide: function() {
        return [];
    },
});

CGE.ColorMaterial = function() {
    CGE.Material.call(this);
    Object.assign(this, {
       _color: new Float32Array([0,0,0,0]),
    });
    let shader = CGE.ColorMaterial.getShader();
    Object.defineProperty(this, "_shader", { value:shader, writable:false });
};

Object.assign(CGE.ColorMaterial, {
    getShader: function() {
        let shader = undefined;
        return function getShader() {
            if (shader === undefined) {
                let vertexShaderText = "#version 100\n\
                attribute vec4 Position;\n\
                attribute vec4 Normal;\n\
                varying vec4 o_color;\n\
                varying vec4 o_normal;\n\
                uniform mat4 mvpMatrix; \n\
                uniform vec4 color; \n\
                void main()\n\
                {\n\
                    o_color = color;\n\
                    o_normal = Normal; \n\
                    gl_Position = mvpMatrix * Position;\n\
                }";

                let fragmentShaderText = "#version 100\n\
                precision mediump float;\n\
                varying vec4 o_color; \n\
                varying vec4 o_normal;\n\
                uniform mat4 NormalWMatrix; \n\
                vec3 DIR_LIGHT = vec3(1.0, -1.0, 1.0);\n\
                \n\
                void main()\n\
                {\n\
                    vec3 normal = normalize((NormalWMatrix*o_normal).xyz); \n\
                    vec3 light = normalize(DIR_LIGHT); \n\
                    gl_FragColor = max(dot(light, normal), 0.0) * o_color;\n\
                }";
                shader = new CGE.Shader();
                shader.setShaderText(vertexShaderText, fragmentShaderText);
                shader.addAttribName(CGE.AttribType.POSITION, 'Position');
                shader.addAttribName(CGE.AttribType.NORMAL, 'Normal');
                shader.addUniformName(CGE.UniformType.COLOR, 'color', CGE.FLOAT_VEC4);
                shader.addMatrixName(CGE.MatrixType.MVPMatrix, 'mvpMatrix');
                shader.addMatrixName(CGE.MatrixType.NormalWMatrix, 'NormalWMatrix');
            }
            return shader;
        };
    }(),
});

CGE.ColorMaterial.prototype = Object.assign(Object.create(CGE.Material.prototype), {
    constructor: CGE.BaseMaterial,

    setColor: function(r, g, b, a) {
        this._color.set([r,g,b,a]);
    },

    getPropertyProvide: function() {
        return [
            {
                data: this._color,
                type: CGE.UniformType.COLOR,
            },
        ];
    },
});

CGE.BaseMaterial = function() {
    CGE.Material.call(this);
    Object.assign(this, {
       _diffuseMap: undefined,
    });
    let shader = CGE.BaseMaterial.getShader();
    Object.defineProperty(this, "_shader", { value:shader, writable:false });
};

Object.assign(CGE.BaseMaterial, {
    getShader: function() {
        let shader = undefined;
        return function getShader() {
            if (shader === undefined) {
                let vertexShaderText = "#version 100\n\
                attribute vec4 Position;\n\
                attribute vec2 UV;\n\
                varying vec2 o_uv; \n\
                uniform mat4 mvpMatrix; \n\
                void main()\n\
                {\n\
                    o_uv = UV;\n\
                    gl_Position = mvpMatrix * Position;\n\
                }";

                let fragmentShaderText = "#version 100\n\
                precision mediump float;\n\
                varying vec2 o_uv; \n\
                uniform sampler2D diffuse;\n\
                \n\
                void main()\n\
                {\n\
                    vec4 color = texture2D(diffuse, o_uv); \n\
                    gl_FragColor = vec4(color.xyz, 1.0);\n\
                }";
                shader = new CGE.Shader();
                shader.setShaderText(vertexShaderText, fragmentShaderText);
                shader.addAttribName(CGE.AttribType.POSITION, 'Position');
                shader.addAttribName(CGE.AttribType.UV0, 'UV');
                shader.addTextureName(CGE.MapType.DIFFUSE, 'diffuse');
                shader.addMatrixName(CGE.MatrixType.MVPMatrix, 'mvpMatrix');
            }
            return shader;
        };
    }(),
});

CGE.BaseMaterial.prototype = Object.assign(Object.create(CGE.Material.prototype), {
    constructor: CGE.BaseMaterial,

    setDiffuseMap: function(map) {
        this._diffuseMap = map;
    },

    getMapProvide: function() {
        return [
            {
                map: this._diffuseMap,
                type: CGE.MapType.DIFFUSE,
            },
        ];
    },
});

//======================================= Transform =========================================

CGE.Transform = function(position, rotate, scale) {
    CGE.Object.call(this);
    Object.assign(this, {
        _position: position || new CGE.Vector3(),
        _rotate: rotate || new CGE.Quaternion(),
        _scale: scale || new CGE.Vector3(1, 1, 1),
        _matrix: new CGE.Matrix4(),
        _needsUpdate: true,
    });
    this.makeMatrix();
};

CGE.Transform.prototype = Object.assign(Object.create(CGE.Object.prototype), {
    constructor: CGE.Transform,

    setNeedUpdateMatrix: function() {
        this._needsUpdate = true;
    },

    update: function() {
        this.makeMatrix();
    },

    setPosition: function(position) {
        this._position.set(position.x, position.y, position.z);
        this.setNeedUpdateMatrix();
    },

    getPosition: function() {
        return this._position;
    },

    setRotate: function(rotate) {
        this._rotate.set(position.x, position.y, position.z, rotate.w);
        this.setNeedUpdateMatrix();
    },

    getRotate: function() {
        return this._rotate;
    },

    setScale: function(scale) {
        this._scale.set(scale.x, scale.y, scale.z);
        this.setNeedUpdateMatrix();
    },

    getScale: function() {
        return this._scale;
    },

    getMatrix: function() {
        return this._matrix;
    },

    makeMatrix: function() {
        if (this._needsUpdate) {
            this._matrix.compose(this._position, this._rotate, this._scale);
            this._needsUpdate = false;
        }
    },

    decompose: function() {
        this._matrix.decompose(this._position, this._rotate, this._scale);
    },

    applyMatrix4: function(mat4) {
        this._matrix.applyMatrix4(mat4);
        this.decompose();
    },

    makeLookAtFromThis: function(initEye, initCenter, initUp) {
        let e = initEye === undefined ? new CGE.Vector3(0,0,0) : initEye.clone();
        let c = initCenter === undefined ? new CGE.Vector3(1,0,0) : initCenter.clone();
        let u = initUp === undefined ? new CGE.Vector3(0,0,1) : initUp.clone();
        e.applyMatrix4(this._matrix);
        c.applyMatrix4(this._matrix);
        u.applyMatrix4(this._matrix);
        let mat = new CGE.Matrix4();
        mat.lookAt(e, c, u);
        return mat;
    },

    lookAt: function(center, up) {
        let c = center.clone();
        let u = up === undefined ? new CGE.Vector3(0,0,1) : up.clone();
        this._matrix.lookAt(this.position, c, u);
        this._matrix.invert();
        this.decompose();
    },
});

CGE.Transform.worldUp = new CGE.Vector3(0, 0, 1); // TODO: move this to another position;

//======================================= Camera =========================================

CGE.Camera = function(width, height, fovy, near, far) {
    // TODO: Remove Transform;
    // TODO: Camera need following Transform NOT inherited;
    CGE.Transform.call(this);
    let w = (width || 800) * 0.5;
    let h = (height || 600) * 0.5;
    Object.assign(this, {
        far: far || 2000.0,
        near: near || 0.1,
        left: -w, 
        right: w, 
        bottom: h, 
        top: -h,
        fovy: fovy || Math.PI / 3,
        aspect: w / h,
        mode: CGE.Camera.Perspective,
        projection: new CGE.Matrix4(),
        center: new CGE.Vector3(),
        up: CGE.Transform.worldUp.clone(),
        _projectionFunc: this._makePerspectiveMatrix,
    });
};

Object.defineProperty(CGE.Camera, 'Orthographic', {writable: false, value: 0});
Object.defineProperty(CGE.Camera, 'Perspective', {writable: false, value: 1});

CGE.Camera.prototype = Object.assign(Object.create(CGE.Transform.prototype), {
    constructor: CGE.Camera,

    update: function() {
        if (this._needsUpdate) {
            this.lookAt(this.center);
            this.makeProjectionMatrix();
            this._needsUpdate = false;
        }
    },

    enableOrthographicMode: function(left, right, bottom, top, near, far) {
        this._projectionFunc = this._makeOrthographicMatrix;
        this.mode = CGE.Camera.Orthographic;
        this.left = left || this.left;
        this.right = right || this.right;
        this.bottom = bottom || this.bottom;
        this.top = top || this.top;
        this.near = near || this.near;
        this.far = far || this.far;
    },

    enablePerspectiveMode: function(fovy, aspect, near, far) {
        this._projectionFunc = this._makePerspectiveMatrix;
        this.mode = CGE.Camera.Perspective;
        this.fovy = fovy || this.fovy;
        this.aspect = aspect || this.aspect;
        let height = Math.abs(this.bottom - this.top);
        let width = height * aspect;
        this.resize(width, height);
    },

    getMode: function() {
        return this.mode;
    },

    makeProjectionMatrix: function() {
        this._projectionFunc();
    },

    _makeOrthographicMatrix: function() {
        this.projection.orthographic(this.left, this.right, this.bottom, this.top, this.near, this.far);
    },

    _makePerspectiveMatrix: function() {
        this.projection.perspective(this.fovy, this.aspect, this.near, this.far);
    },

    getProjectionMatrix: function() {
        return this.projection;
    },

    getViewProjectionMatrix: function() {
        let mat4 = this.projection.clone();
        mat4.applyMatrix4(this.getMatrix());
        return mat4;
    },

    makeMatrix: function() {
        this.lookAt(this.center);
    },

    applyMatrix4: function(mat4) {
        CGE.Transform.prototype.applyMatrix4.call(this, mat4);
        this.eye.applyMatrix4(mat4);
        this.center.applyMatrix4(mat4);
        this.up.applyMatrix4(mat4);
    },

    setUp: function(up) {
        this.up.copy(up);
        this.setNeedUpdateMatrix();
    },

    lookAt: function(center) {
        if (center) {
            this.center.copy(center);
            this._matrix.lookAt(this._position, center, this.up);
        }
    },

    resize: function(width, height) {
        this.setNeedUpdateMatrix();
        let xCenter = (this.right - this.left) * 0.5 + this.left;
        let yCenter = (this.bottom - this.top) * 0.5 + this.top;
        let halfWidth = width * 0.5;
        let halfHeight = height * 0.5;
        this.left = xCenter - halfWidth;
        this.right = xCenter + halfWidth;
        this.top = yCenter - halfHeight;
        this.bottom = yCenter + halfHeight;
        this.aspect = width / height;
    },
});

//======================================= Component =========================================

CGE.Component = function(object, componentType) {
    CGE.Object.call(this);
    Object.assign(this, {
        _entity: undefined,
        _object: object,
        _type: componentType,
    });
};

CGE.Component.prototype = Object.assign(Object.create(CGE.Object.prototype), {
    constructor: CGE.Component,

    update: function() {
        this._object.update();
    },

    getObject: function() {
        return this._object;
    },

    getType: function() {
        return this._type;
    },

    setEntity: function(entity) {
        this._entity = entity;
    },

    getEntity: function(entity) {
        return this._entity;
    },
});

Object.assign(CGE.Component, {
    CreateTransfromComponent: function(transform) {
        return new CGE.Component(transform, CGE.ComponentType.Transform);
    },

    CreateGeometryComponent: function(geometry) {
        return new CGE.Component(geometry, CGE.ComponentType.Geometry);
    },

    CreateMaterialComponent: function(material) {
        return new CGE.Component(material, CGE.ComponentType.Material);
    },

    CreateCameraComponent: function(camera) {
        return new CGE.Component(camera, CGE.ComponentType.Camera);
    },

    CreateLightComponent: function(light) {
        return new CGE.Component(light, CGE.ComponentType.Light);
    },
});

//======================================= Mesh =========================================

CGE.Mesh = function(geometry, material) {
    Object.assign(this, {
        geometry: geometry,
        material: material,
        transform: new CGE.Transform(),
    });
};

//======================================= Entity =========================================

CGE.Entity = function() {
    CGE.Object.call(this);
    Object.assign(this, {
        _parent: undefined,
        _children: [],
        _components: new Map(),
        transform: undefined,
        geometry: undefined,
        material: undefined,
        camera: undefined,
        light: undefined,
    });
};

CGE.Entity.prototype = Object.assign(Object.create(CGE.Object.prototype), {
    constructor: CGE.Entity,

    update: function() {
        this._components.forEach(function(component, type) {
            component.update();
        });
    },

    addComponent: function(component) {
        if (component instanceof CGE.Component) {
            if (component.getEntity() !== undefined) {
                return undefined;
            }
            switch (component.getType()) {
                case CGE.ComponentType.Transform: 
                    this.transform = component.getObject(); 
                    break;
                case CGE.ComponentType.Geometry:
                    this.geometry = component.getObject(); 
                    break;
                case CGE.ComponentType.Material:
                    this.material = component.getObject();
                    break;
                case CGE.ComponentType.Camera:
                    this.camera = component.getObject();
                    break;
                case CGE.ComponentType.Light:
                    this.light = component.getObject();
                    break;
                default:
                    break;
            }
            component.setEntity(this);
            this._components.set(component.getType(), component);
        }
    },

    getComponent: function(componentType) {
        return this._components.get(componentType);
    },

    getComponentObject: function(componentType) {
        let component = this._components.get(componentType);
        return component !== undefined ? component.getObject() : undefined;
    },

    removeComponent: function(component) {
        if (component instanceof CGE.Component) {
            this.removeFromType(component.getType());
        }
    },

    removeFromType: function(type) {
        let component = this.getComponent(type);
        if (component instanceof CGE.Component) {
            switch (type) {
                case CGE.ComponentType.transform: 
                    this.transform = undefined; 
                    break;
                case CGE.ComponentType.Geometry: 
                    this.geometry = undefined; 
                    break;
                case CGE.ComponentType.Material:
                    this.material = undefined;
                    break;
                case CGE.ComponentType.Camera:
                    this.camera = undefined;
                    break;
                case CGE.ComponentType.Light:
                    this.light = undefined;
                    break;
                default:
                    break;
            }
            component.setEntity(undefined);
            this._components.delete(type);
        }
    },

    // TODO: re-name this function;
    canBeRendering: function() {
        return (this.geometry !== undefined) && (this.material !== undefined);
    },

    addChild: function(entity) {
        this._children.push(subEntity);
    },

    setParent: function(entity) {
        this._parent = entity;
    },

    getParent: function(entity) {
        return this._parent;
    },
});

Object.assign(CGE.Entity, {
    createRenderableEntity: function(geometry, material, transform) {
        let entity = new CGE.Entity();
        entity.addComponent(CGE.Component.CreateGeometryComponent(geometry));
        entity.addComponent(CGE.Component.CreateMaterialComponent(material));
        entity.addComponent(CGE.Component.CreateTransfromComponent(transform));
        return entity;
    },
});

//======================================= Scene =========================================

CGE.Scene = function() {
    CGE.Object.call(this);
    Object.assign(this, {
        _entities: new Map(),
        _mainCamera: undefined,
        _mainLight: undefined,
        _enforceMaterial: undefined,
        _deferred: false,
    });
};

CGE.Scene.prototype = Object.assign(Object.create(CGE.Object.prototype), {
    constructor: CGE.Scene,

    update: function() {
        this._entities.forEach(function(entity){
            entity.update();
        });
    },

    getEntitys: function() {
        return this._entities;
    },

    addEntity: function(entity) {
        this._entities.set(entity.id, entity);
    },

    getRenderEntities: function() {
        let renderEntities = [];
        this._entities.forEach(function(entity, id) {
            if (entity.canBeRendering()) {
                renderEntities.push(entity);
            }
        });
        return renderEntities;
    },

    getShadowMapEntitiesFromLight: function() {

    },

    getMainCamera: function() {
        return this._mainCamera;
    },

    setMainCamera: function(entity) {
        this.addEntity(entity);
        this._mainCamera = entity.camera;
    },
});

//======================================= RenderTargetState =========================================

CGE.RenderTargetState = function() {
    Object.assign(this, {
        isClearColor: true,
        clearColor: new CGE.Vector4(1,1,1,1),
        isClearDepth: false,
        clearDepth: 1.0,
        isClearStencil: false,
        clearStencil: 0,
        viewport: new CGE.Vector4(),
    });
};

Object.assign(CGE.RenderTargetState.prototype, {
    constructor: CGE.RenderTargetState,

    setClearColor: function(enable, color) {
        this.isClearColor = enable === true;
        if (color) {
            this.clearColor.copy(color);
        }
    },

    setClearDepth: function(enable, depth) {
        this.isClearDepth = enable === true;
        if (depth) {
            this.clearDepth = depth;
        }
    },

    setClearStencil: function(enable, stencil) {
        this.isClearStencil = enable === true;
        if (stencil) {
            this.clearStencil = stencil;
        }
    },

    setViewport: function(offset) {
        this.viewport.copy(offset);
    },
});

//======================================= RenderTarget =========================================

CGE.RenderTarget = function() {
    CGE.VersionObject.call(this);
    Object.assign(this, {
        _textures: new Map(),
        _width: 64,
        _height: 64,
        _isFollowScreen: false,
        _depthStencilTexture: undefined,
        _state: new CGE.RenderTargetState(),
        _needsUpdateSize: false,
    });
};

CGE.RenderTarget.prototype = Object.assign(Object.create(CGE.VersionObject.prototype), {
    constructor: CGE.RenderTarget,

    update: function() {
        if (this._needsUpdateSize) {
            this._needsUpdateSize = false;
        }
    },

    getState: function() {
        return this._state;
    },

    getDepthStencilTexture: function() {
        return this._depthStencilTexture;
    },

    _createTexture2d: function(format, dataType) {
        let texture2d = new CGE.Texture2d();
        texture2d.setSize(this._width, this._height);
        texture2d.setFormat(format, format);
        texture2d.setType(dataType);
        return texture2d;
    },

    enableDepthStencil: function() {
        // TODO: check webgl2 why can't used texture to be render target;
        this._state.setClearDepth(true);
        this._state.setClearStencil(true);
        let texture2d = this._createTexture2d(CGE.DEPTH_STENCIL, CGE.UNSIGNED_INT_24_8);
        texture2d.setFilter(CGE.NEAREST, CGE.NEAREST);
        this._depthStencilTexture = texture2d;
    },

    setNeedsDepthStencil: function(b) {
        this._needsDepthStencil = b === true;
    },

    isNeedsDepthStencil: function(b) {
        return this._needsDepthStencil;
    },

    isFollowScreen: function() {
        return this._isFollowScreen;
    },

    setFollowScreen: function(b) {
        this._isFollowScreen = b === true;
    },

    _updateTextureSize() {
        const w = this._width;
        const h = this._height;
        if (this._depthStencilTexture) {
            this._depthStencilTexture.setSize(w, h);
        }
        this._textures.forEach(function(texture, type) {
            texture.setSize(w, h);
        });
    },

    setSize: function(width, height) {
        if (this._width === width && this._height === height) {
            return undefined;
        }
        this._width = width;
        this._height = height;
        this._updateTextureSize();
        this._state.setViewport(new CGE.Vector4(0, 0, width, height));
        this.needsUpdate();
    },

    getSize: function() {
        return {
            w: this._width,
            h: this._width,
        }
    },

    setOffset: function(viewport) {
        this._state.setViewport(viewport);
    },

    addTexture: function(targetType, format, dataType, filterMin, filterMag) {
        let __format = format || CGE.RGBA;
        let __dataType = dataType || CGE.UNSIGNED_BYTE;
        let texture2d = this._createTexture2d(__format, __dataType);
        texture2d.setFilter(filterMin, filterMag);
        this._textures.set(targetType, texture2d);
    },

    getTextureFromType: function(targetType) {
        return this._textures.get(targetType);
    },

    getTextureMap: function() {
        return this._textures;
    },

    setClearColor: function(color) {
        this._state.setClearColor(true, color);
    },
 });

//======================================= WebGL2Renderer =========================================

CGE.WebGLRenderer = function() {
    // TODO: The Function name MUST use '_' inital that all called _gl function;
    // TODO: Take unless _gl's function out of constructor;

    let _canvas = document.createElement('canvas');
    let _gl = _canvas.getContext('webgl', {antialias: true});

    if (_gl === undefined) {
        alert('Can not use webgl');
        return undefined;
    }

    let _ext = {};

    let getExtension = function(extName) {
        let ext = _gl.getExtension(extName) || _gl.getExtension('WEBKIT_' + extName) || _gl.getExtension('MOZ_' + extName);
        if (!ext) {
            alert('Can not use webgl extension ' + extName);
        }
        return ext;
    };

    _ext.OES_vertex_array_object = getExtension("OES_vertex_array_object");
    _ext.WEBGL_draw_buffers = getExtension("WEBGL_draw_buffers");
    _ext.OES_standard_derivatives = getExtension("OES_standard_derivatives");
    _ext.OES_texture_half_float = getExtension("OES_texture_half_float");
    _ext.OES_texture_float = getExtension("OES_texture_float");
    _ext.WEBGL_depth_texture = getExtension("WEBGL_depth_texture");
    _ext.EXT_texture_filter_anisotropic = getExtension("EXT_texture_filter_anisotropic");

    if (!_ext.OES_vertex_array_object 
        || !_ext.WEBGL_draw_buffers 
        || !_ext.OES_standard_derivatives
        || !_ext.OES_texture_half_float
        || !_ext.OES_texture_float
        || !_ext.WEBGL_depth_texture
        || !_ext.EXT_texture_filter_anisotropic) {
        alert('Can not use webgl extension');
        return undefined;
    }

    // _gl.createVertexArray = _ext.OES_vertex_array_object.createVertexArrayOES;
    // _gl.deleteVertexArray = _ext.OES_vertex_array_object.deleteVertexArrayOES;
    // _gl.bindVertexArray = _ext.OES_vertex_array_object.bindVertexArrayOES;
    // _gl.isVertexArray = _ext.OES_vertex_array_object.isVertexArrayOES;
    // _gl.VERTEX_ARRAY_BINDING = _ext.OES_vertex_array_object.VERTEX_ARRAY_BINDING_OES;

    // _gl.drawBuffers = _ext.WEBGL_draw_buffers.drawBuffersWEBGL;
    _gl.MAX_COLOR_ATTACHMENTS = _ext.WEBGL_draw_buffers.MAX_COLOR_ATTACHMENTS_WEBGL;
    // _gl.MAX_DRAW_BUFFERS_WEBGL = _ext.WEBGL_draw_buffers.MAX_DRAW_BUFFERS_WEBGL;

    // TODO: Add a class to control gl context;

    let ANISOTROPY = 2.0;
    _gl.enable(_gl.DEPTH_TEST);
    _gl.depthFunc(_gl.LEQUAL);
    _gl.disable(_gl.BLEND);

    // this function is ONLY used for DEBUG;
    this.getContext = function() {
        return _gl;
    };

    let clear = function(color, depth, stencil) {
        _gl.clear(
            (color ? _gl.COLOR_BUFFER_BIT : 0) |
            (depth ? _gl.DEPTH_BUFFER_BIT : 0) |
            (stencil ? _gl.STENCIL_BUFFER_BIT : 0)
        );
    };


    let defaultTargetState = new CGE.RenderTargetState();
    let currentTargetState = new CGE.RenderTargetState();

    let applyTergetState = function(state) {
        let color = state.clearColor;
        _gl.clearColor(color.x, color.y, color.z, color.w);
        let viewport = state.viewport;
        _gl.viewport(viewport.x, viewport.y, viewport.z, viewport.w);

        if (state.isClearDepth !== currentTargetState.isClearDepth) {
            currentTargetState.isClearDepth = state.isClearDepth;
            if (state.isClearDepth) {
                _gl.enable(_gl.DEPTH_TEST);
            } else {
                _gl.disable(_gl.DEPTH_TEST);
            }
        }

        // if (state.isClearStencil !== currentTargetState.isClearStencil) {
        //     currentTargetState.isClearStencil = state.isClearStencil;
        //     if (state.isClearStencil) {
        //         _gl.enable(_gl.STENCIL_TEST);
        //     } else {
        //         _gl.disable(_gl.STENCIL_TEST);
        //     }
        // }

        clear(state.isClearColor, state.isClearDepth, state.isClearStencil);
    };

    let self = this;

    let initializedMap = new Map();
    // glBuffer --->  bufferGeometry
    // glProgram  ---> material & shader
    // glTexturexd  ----> texturexd
    // glFrame -----> renderTarget

    this.getInitializedMap = function() {
        return initializedMap;
    };

    let renderCount = 0;
    let screenWidth = 0, 
        screenHeight = 0;

    this.enableDepthTest = function() {
        defaultTargetState.setClearDepth(true);
    };

    this.disableDepthTest = function() {
        defaultTargetState.setClearDepth(false);
    };

    this.setSize = function(width, height) {
        _canvas.width = width;
        _canvas.height = height;
        screenWidth = width;
        screenHeight = height;
        defaultTargetState.setViewport(new CGE.Vector4(0, 0, width, height));
    };

    this.setOffset = function(x, y, w, h) {
        defaultTargetState.setViewport(new CGE.Vector4(x, y, w, h));
    };

    this.setClearColor = function(r, g, b, a) {
        defaultTargetState.setClearColor(true, new CGE.Vector4(r, g, b, a));
    };

    this.getCanvas = function() {
        return _canvas;
    };

    this.clear = function (color, depth, stencil){
        defaultTargetState.setClearColor(color);
        defaultTargetState.setClearDepth(depth);
        defaultTargetState.setClearStencil(stencil);
    };

    let _glObject = function() {
        CGE.Object.call(this);
        Object.assign(this, {
            _localVersion: -1,
            _renderCount: renderCount,
        });
    }

    _glObject.prototype = Object.assign(Object.create(CGE.Object.prototype), {
        constructor: _glObject,

        getLocalVersion: function() {
            return this._localVersion;
        },

        setLocalVersion: function(version) {
            this._localVersion = version;
        },

        checkVersion: function(version) {
            return version - _localVersion;
        },

        checkRenderCount: function() {
            return renderCount - this._renderCount; 
        },

        updateRenderCount: function() {
            this._renderCount = renderCount;
        },
    });

    let _glBuffer = function() { 
        _glObject.call(this);
        Object.assign(this, {
            _vbos: [],
            _ibo: undefined,
            _draw: undefined,
            // TODO: remove this;
            _geometry: undefined,
        });
    };

    _glBuffer.prototype = Object.assign(Object.create(_glObject.prototype), {
        constructor: _glBuffer,

        _createBufferFromData: function(target, data, usage) {
            let buffer = _gl.createBuffer();
            _gl.bindBuffer(target, buffer);
            _gl.bufferData(target, data, usage);
            _gl.bindBuffer(target, null);
            return buffer;
        },

        generateFromGeometry: function(geometry) {
            // TODO: make this function more simple;
            let version = geometry.getUpdateVersion();
            let attributeDatas = geometry.getAttributeDatas();
            let indexData = geometry.getIndexData();
            let drawParameter = geometry.getDrawParameter();

            if (attributeDatas.length === 0) {
                return undefined;
            }

            this._geometry = geometry;
            
            attributeDatas.forEach(function(attribute){
                let vbo = this._createBufferFromData(_gl.ARRAY_BUFFER, attribute.data, attribute.usage);
                this._vbos.push(vbo);
            }.bind(this));

            if (geometry._indexData) {
                this._ibo = this._createBufferFromData(_gl.ELEMENT_ARRAY_BUFFER, indexData.data, indexData.usage);
                this._draw = new _glDrawWithIndex(drawParameter.mode, drawParameter.offset, drawParameter.count, indexData.type, this._ibo);
            } else {
                this._draw = new _glDraw(drawParameter.mode, drawParameter.offset, drawParameter.count, 0);
            }
            
            this.setLocalVersion(version);
            return this;
        },

        getGeometry: function() {
            return this._geometry;
        },

        getVbos: function() {
            return this._vbos;
        },

        getIbo: function() {
            return this._ibo;
        },

        getDraw: function() {
            return this._draw;
        },

        draw: function() {
            this._draw.apply();
        },
    });

    let _glDraw = function(mode, offset, count, type) {
        Object.assign(this, {
            _mode: mode,
            _offset: offset,
            _count: count,
            _type: type,
            
        });
    };

    _glDraw.prototype = Object.assign(_glDraw.prototype, {
        constructor: _glDraw,
        apply: function() {
            _gl.drawArrays(this._mode, this._offset, this._count);
        },
    }); 

    let _glDrawWithIndex = function(mode, offset, count, type, ibo) {
        _glDraw.call(this, mode, offset, count, type);
        this._ibo = ibo;
    };
    _glDrawWithIndex.prototype = Object.assign(Object.create(_glDrawWithIndex.prototype), {
        constructor: _glDrawWithIndex,
        apply: function() {
            _gl.bindBuffer(_gl.ELEMENT_ARRAY_BUFFER, this._ibo);
            _gl.drawElements(this._mode, this._count, this._type, this._offset);
        },
    });

    let _glTexture = function() {
        _glObject.call(this);
        Object.assign(this, {
            _minFilter: _gl.LINEAR,
            _magFilter: _gl.LINEAR,
            _texture: undefined,
        });
    };

    _glTexture.prototype = Object.assign(Object.create(_glObject.prototype), {
        constructor: _glTexture,

        setFilter: function(min, mag) {
            this._minFilter = min;
            this._magFilter = mag;
        },

        getHandler: function() {
            return this._texture;
        },
    });

    let _glTexture2D = function() {
        _glTexture.call(this);
        Object.assign(this, {
            _wrapS: _gl.CLAMP_TO_EDGE,
            _wrapT: _gl.CLAMP_TO_EDGE,
        });
    };

    _glTexture2D.prototype = Object.assign(Object.create(_glTexture.prototype), {
        constructor: _glTexture2D,

        _applyParameter: function(target, mipmap) {
            _gl.texParameteri(target, _gl.TEXTURE_MIN_FILTER, this._minFilter);
            _gl.texParameteri(target, _gl.TEXTURE_MAG_FILTER, this._magFilter);
            _gl.texParameteri(target, _gl.TEXTURE_WRAP_S, this._wrapS);
            _gl.texParameteri(target, _gl.TEXTURE_WRAP_T, this._wrapT);
            _gl.texParameteri(target, _ext.EXT_texture_filter_anisotropic.TEXTURE_MAX_ANISOTROPY_EXT, ANISOTROPY);
            if (mipmap) {
                _gl.generateMipmap(target);
            }
        },

        _setTextureData: function(target, texture) {
            let format = texture.getFormat();
            let internalformat = texture.getInternalformat();
            let type = texture.getType();

            if (texture.getImage() !== undefined && texture.isLoad()) {
                let image = texture.getImage();
                _gl.texImage2D(target, 0, internalformat, format, type, image);
            } else if (texture.getWidth() !== 0 && texture.getHeight() !== 0) {
                _gl.texImage2D(target, 0, internalformat, texture.getWidth(), texture.getHeight(), 0, format, type, null);
            } else {
                return undefined;
            }
            return this;
        },

        _createTextureDatas: function(texture2d) {
            let handler = _gl.createTexture();
            _gl.bindTexture(_gl.TEXTURE_2D, handler);
            if (this._setTextureData(_gl.TEXTURE_2D, texture2d) === undefined) {
                return undefined;
            }
            return handler;
        },

        _applyParameters: function(mipmap) {
            this._applyParameter(_gl.TEXTURE_2D, mipmap);
        },

        _createGLTextureFromTexture: function(texture) {
            let handler = this._createTextureDatas(texture);
            if (handler === undefined) {
                return undefined;
            }
            this.setFilter(texture.getMinFilter(), texture.getMagFilter());
            this.setWarp(texture.getWrapS(), texture.getWrapT());
            this._applyParameters(texture.getMipmap());
            return handler;
        },

        generateFromTexture: function(texture) {
            let handler = this._createGLTextureFromTexture(texture);
            if (handler === undefined) {
                return undefined;
            }
            this._texture = handler;
            this.setLocalVersion(texture.getUpdateVersion());
            return this;
        },

        apply: function(index) {
            _gl.activeTexture(_gl.TEXTURE0 + index);
            _gl.bindTexture(_gl.TEXTURE_2D, this._texture);
        },

        setWarp: function(wrapS, wrapT) {
            this._wrapS = wrapS;
            this._wrapT = wrapT;
        }
    });

    let _glTextureCube = function() {
        _glTexture2D.call(this);
    };

    _glTextureCube.prototype = Object.assign(Object.create(_glTexture2D.prototype), {
        constructor: _glTextureCube,

        _createTextureDatas: function(textureCube) {
            let handler = _gl.createTexture();
            _gl.bindTexture(_gl.TEXTURE_CUBE_MAP, handler);
            let textures = textureCube.getTexture2ds();
            for (let i = 0; i < textures.length; i++) {
                let texture2d = textures[i];
                if (textures[i] && this._setTextureData(_gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, texture2d) === undefined) {
                    return undefined;
                }
            }            
            return handler;
        },

        _applyParameters: function(mipmap) {
            this._applyParameter(_gl.TEXTURE_CUBE_MAP, mipmap);
        },

        apply: function(index) {
            _gl.activeTexture(_gl.TEXTURE0 + index);
            _gl.bindTexture(_gl.TEXTURE_CUBE_MAP, this._texture);
        },
    });

    let _glProgram = function() {
        _glObject.call(this);
        Object.assign(this, {
            _program: undefined,
            _attributeLocations: new Map(),
            _matrixLocations: new Map(),
            _uniformLocations: new Map(),
        });
    };

    _glProgram.prototype = Object.assign(Object.create(_glObject.prototype), {
        constructor: _glProgram,

        _createShaderFromeText: function(type, text) {
            let shader = _gl.createShader(type);
            _gl.shaderSource(shader, text);
            _gl.compileShader(shader);
            if (_gl.getShaderParameter(shader, _gl.COMPILE_STATUS) == 0) {
                CGE.Logger.error(text);
                CGE.Logger.error(_gl.getShaderInfoLog(shader));
                _gl.deleteShader(shader);
                return undefined;
            }
            return shader;
        },

        _createProgram: function(vs, fs) {
            let program = _gl.createProgram();
            _gl.attachShader(program, vs);
            _gl.attachShader(program, fs);

            _gl.linkProgram(program);

            if (!_gl.getProgramParameter(program, _gl.LINK_STATUS)) {
                CGE.Logger.error("Could not initialise shaders shader " + _gl.getProgramInfoLog(shader));
                return undefined;
            }
            return program;
        },

        _createProgramFromText: function(vsText, fsText) {
            let vs = this._createShaderFromeText(_gl.VERTEX_SHADER, vsText);              
            let fs = this._createShaderFromeText(_gl.FRAGMENT_SHADER, fsText); 

            if (vs === undefined || fs === undefined) {
                return undefined;
            }

            let program = this._createProgram(vs, fs);
            if (program === undefined) {
                return undefined;
            }

            _gl.deleteShader(vs);
            _gl.deleteShader(fs);

            return program;
        },

        _createGLUniformObject(location, type) {
            return {
                location: location,
                type: type
            };
        },

        _createUniformLocationMap(srcMap, dstMap) {
            srcMap.forEach(function(value, key) {
                let location = _gl.getUniformLocation(this._program, value.name);
                dstMap.set(key, this._createGLUniformObject(location, value.type));
            }.bind(this));
        },

        _createAttributeLocationMap(locationNameMap) {
            locationNameMap.forEach(function(name, attribType){
                let location = _gl.getAttribLocation(this._program, name);
                this._attributeLocations.set(attribType, location);
            }.bind(this));
        },

        generateFromShader: function(shader) {
            let version = shader.getUpdateVersion();
            let program = this._createProgramFromText(shader.getVertexShaderText(), shader.getFragmentShaderText());

            if (program === undefined) {
                return undefined;
            }

            this._program = program;
            this._createAttributeLocationMap(shader.getAttribNameMap());
            this._createUniformLocationMap(shader.getMatrixNameMap(), this._matrixLocations);
            this._createUniformLocationMap(shader.getUniformNameMap(), this._uniformLocations);
            
            this.setLocalVersion(version);
            return this;
        },

        apply: function() {
            _gl.useProgram(this._program);
        },

        setUniformData: function(type, location, data) {
            // TODO: need re-build;
            switch(type) {
                case CGE.UNSIGNED_INT:
                    _gl.uniform1i(location, data[0]);
                    break;
                case CGE.FLOAT_VEC2:
                    _gl.uniform2fv(location, data);
                    break;
                case CGE.FLOAT_VEC3:
                    _gl.uniform3fv(location, data);
                    break;
                case CGE.FLOAT_VEC4:
                    _gl.uniform4fv(location, data);
                    break;
                case CGE.FLOAT_MAT3:
                    _gl.uniformMatrix3fv(location, false, data);
                    break;
                case CGE.FLOAT_MAT4:
                    _gl.uniformMatrix4fv(location, false, data);
                    break;
                default:
                    break;
            }
        },

        applyUniformData: function(uniformType, data) {
            let uniform = this.getUniformLocation(uniformType);
            if (uniform === undefined) {
                return;
            }

            let location = uniform.location;
            this.setUniformData(uniform.type, location, data);
        },

        applyMatrixData: function(uniformType, data) {
            let uniform = this.getMatrixLocation(uniformType);
            if (uniform === undefined) {
                return;
            }

            let location = uniform.location;
            this.setUniformData(uniform.type, location, data);
        },

        getUniformLocation: function(uniformType) {
            return this._uniformLocations.get(uniformType);
        },

        getMatrixLocation: function(matrixType) {
            return this._matrixLocations.get(matrixType);
        },

        getUniformLocationMap: function() {
            return this._uniformLocations;
        },

        getMatrixLocationMap: function() {
            return this._matrixLocations;
        },

        getAttribLocation: function(attribType) {
            return this._attributeLocations.get(attribType);
        },
    });

    this.initGeometry = function(geometry) {
        let glBuffer = initializedMap.get(geometry.id);
        if (glBuffer !== undefined && glBuffer.getLocalVersion() === geometry.getUpdateVersion()) 
            return glBuffer;

        glBuffer = new _glBuffer();
        if (glBuffer.generateFromGeometry(geometry)) {
            initializedMap.set(geometry.id, glBuffer);
            return glBuffer;
        }
    };

    this.initShader = function(shader) {
        let glProgram = initializedMap.get(shader.id);
        if (glProgram !== undefined && glProgram.getLocalVersion() === shader.getUpdateVersion()) 
            return glProgram;

        glProgram = new _glProgram();
        if (glProgram.generateFromShader(shader)) {
            initializedMap.set(shader.id, glProgram);
            return glProgram;
        }
    };

    this.initTexture2d = function(texture) {
        let glTexture = initializedMap.get(texture.id);
        if (glTexture !== undefined && glTexture.getLocalVersion() === texture.getUpdateVersion()) 
            return glTexture;
        if (texture instanceof CGE.Texture2d) {
            glTexture = new _glTexture2D();
        } else if (texture instanceof CGE.TextureCube) {
            glTexture = new _glTextureCube();
        }
        
        if (glTexture.generateFromTexture(texture)) {
            initializedMap.set(texture.id, glTexture);
            return glTexture;
        }
    };

    // _glMesh's local version is Entity version;
    // TODO: try remove Entity's update version;
    let _glMesh = function() {
        _glObject.call(this);
        Object.assign(this, {
            _vao: undefined,
            _textures: new Map(),
            _uniforms: undefined,
            _glBuffer: undefined,
            _glProgram: undefined,
            _2ndLocalVersion: -1,
        });
    };

    _glMesh.prototype = Object.assign(Object.create(_glObject.prototype), {
        constructor: _glMesh,

        get2ndLocalVersion: function() {
            return this._2ndLocalVersion;
        },

        set2ndLocalVersion: function(version) {
            this._2ndLocalVersion = version;
        },

        _initGLObject: function(geometry, shader, images) {
            let glBuffer = self.initGeometry(geometry);
            if (!glBuffer) {
                return undefined;
            }
            let glProgram = self.initShader(shader);
            if (!glProgram) {
                return undefined;
            }

            for (let i = 0; i < images.length; i++) {
                let image = images[i];
                let glTexture = self.initTexture2d(image.map);
                if (glTexture !== undefined) {
                    this._textures.set(image.type, glTexture);
                } else {
                    this._textures.clear();
                    return undefined;
                }
            }

            this._glBuffer = glBuffer;
            this._glProgram = glProgram;

            return this;
        },

        _createVao: function(glProgram) {
            let glBuffer = this._glBuffer;
            let vao = _ext.OES_vertex_array_object.createVertexArrayOES();
            _ext.OES_vertex_array_object.bindVertexArrayOES(vao);
            let geometry = glBuffer.getGeometry();
            let vbos = glBuffer.getVbos();
            let attributeDatas = geometry.getAttributeDatas();
            for (let i = 0; i < vbos.length; i++) {
                let attribute = attributeDatas[i];
                let vbo = vbos[i];
                _gl.bindBuffer(_gl.ARRAY_BUFFER, vbo);
                attribute.attribPointers.forEach(function(param){
                    let location = glProgram.getAttribLocation(param.attribute);
                    if (location === undefined || location === -1) 
                        return; 
                    _gl.enableVertexAttribArray(location);
                    _gl.vertexAttribPointer(location, param.num, attribute.type, false, attribute.stride, param.offset);
                }.bind(this));
            }

            let ibo = glBuffer.getIbo();
            if (ibo) {
                _gl.bindBuffer(_gl.ELEMENT_ARRAY_BUFFER, ibo);
            }
            _ext.OES_vertex_array_object.bindVertexArrayOES(null);
            this._vao = vao;
            return this;
        },

        _applyVao: function() {
            _ext.OES_vertex_array_object.bindVertexArrayOES(this._vao);
        },

        _applyTextures: function() {
            let count = 0;
            this._textures.forEach(function(glTexture, type) {
                glTexture.apply(count);
                this._glProgram.applyUniformData(type, new Int32Array([count]));
                count++;
            }.bind(this));
        },

        _applyMatrices: function(entity, cameraMatrices) {
            let glProgram = this._glProgram;
            let matrixLocaionMap = glProgram.getMatrixLocationMap();
            let transform = entity.transform;
            let worldMatrix = transform === undefined ? new CGE.Matrix4() : transform.getMatrix();

            let getMVMatrix = function() {
                let MVMatrix = undefined;
                return function getMVMatrix() {
                    MVMatrix = MVMatrix || cameraMatrices.viewMatirx.clone().applyMatrix4(worldMatrix);
                    return MVMatrix;
                }
            }();

            let getMVPMatrix = function() {
                let MVPMatrix = undefined;
                return function getMVPMatrix() {
                    MVPMatrix = MVPMatrix || cameraMatrices.viewProjectionMatirx.clone().applyMatrix4(worldMatrix);
                    return MVPMatrix;
                }
            }();

            matrixLocaionMap.forEach(function(uniformObject, matrixType) {
                let location = uniformObject.location;
                let type = uniformObject.type;
                let matrix = undefined;
                // TODO: need re-build;
                switch (matrixType) {
                    case CGE.MatrixType.WMatrix:
                        matrix = worldMatrix;
                        break;
                    case CGE.MatrixType.VMatrix:
                        matrix = cameraMatrices.viewMatirx;
                        break;
                    case CGE.MatrixType.PMatrix:
                        matrix = cameraMatrices.projectionMatirx;
                        break;
                    case CGE.MatrixType.MVMatrix:
                        matrix = getMVMatrix();
                        break;
                    case CGE.MatrixType.MVPMatrix:
                        matrix = getMVPMatrix();
                        break;
                    case CGE.MatrixType.NormalWMatrix:
                        matrix = worldMatrix.clone().invertTranspose();
                        break;
                    case CGE.MatrixType.NormalMVMatrix:
                        matrix = getMVMatrix().clone().invertTranspose();
                        break;
                    case CGE.MatrixType.NormalMVPMatrix:
                        matrix = getMVPMatrix().clone().invertTranspose();
                        break;
                    case CGE.MatrixType.InverseWMatrix:
                        matrix = worldMatrix.clone().invert();
                        break;
                    case CGE.MatrixType.InverseVMatrix:
                        matrix = VMatrix.clone().invert();
                        break;
                    case CGE.MatrixType.InversePMatrix:
                        matrix = cameraMatrices.projectionMatirx.clone().invert();
                        break;
                    default:
                        return undefined;
                }
                glProgram.setUniformData(type, location, matrix.data);
            });
        },

        _applyUniforms: function(entity) {
            let material = entity.material;
            let properties = material.getPropertyProvide();
            let glProgram = this._glProgram;
            properties.forEach(function(property) {
                let type = property.type;
                let data = property.data;
                glProgram.applyUniformData(type, data);
            });
        },

        _applyStates: function() {

        },

        _applyMaterial: function(entity, cameraMatrices) {
            this._glProgram.apply();
            
            this._applyTextures();
            this._applyUniforms(entity);
            this._applyMatrices(entity, cameraMatrices);

            //TODO: apply state;
        },

        generate: function(entity) {
            let check = this.checkGLObject(entity);
            if (check === undefined) {
                return undefined;
            }

            if (this._createVao(this._glProgram) === undefined) {
                return undefined;
            }

            let geometryVersion = entity.geometry.getUpdateVersion();
            let shaderVersion = entity.geometry.getUpdateVersion();
            this.setLocalVersion(geometryVersion);
            this.set2ndLocalVersion(shaderVersion);
            return this;
        },

        checkGLObject: function(entity) {
            let geometry = entity.geometry;
            let material = entity.material;
            let shader = material.getShader();
            let images = material.getMapProvide();

            if (this._initGLObject(geometry, shader, images) === undefined) {
                return undefined;
            }
            return this;
        },

        apply: function(entity, cameraMatrices) {
            this._applyMaterial(entity, cameraMatrices);
            this._applyVao();
        },

        draw: function() {
            this._glBuffer.draw();
        },
    });

    let _glMeshManager = {
        _glMeshMap: new Map(),
    };

    // meshMap struct: map(bufferId, map(shaderId, glMesh));

    Object.assign(_glMeshManager, {

        addGLMesh: function(geometryId, shaderId, glMesh) {
            let map = this._glMeshMap.get(geometryId);
            if (map === undefined) {
                map = new Map();
                this._glMeshMap.set(geometryId, map);
            }
            map.set(shaderId, glMesh);
        },

        getGLMesh: function(geometryId, shaderId) {
            let map = this._glMeshMap.get(geometryId);
            if (map === undefined) {
                return undefined;
            }
            return map.get(shaderId);
        },
    });

    this._renderEntity = function(entity, cameraMatrices) {
        let geometry = entity.geometry;
        let shader = entity.material.getShader();
        let glMesh = _glMeshManager.getGLMesh(geometry.id, shader.id);
        if (glMesh !== undefined
            && glMesh.getLocalVersion() === geometry.getUpdateVersion() 
            && glMesh.get2ndLocalVersion() === shader.getUpdateVersion()) {
            glMesh.checkGLObject(entity);
        } else {
            glMesh = new _glMesh();
            if (glMesh.generate(entity)) {
                _glMeshManager.addGLMesh(geometry.id, shader.id, glMesh);
            } else {
                return undefined;
            }
        }
        glMesh.apply(entity, cameraMatrices);
        glMesh.draw();
    };

    this._getCameraMatrices = function(camera) {
        return {
            viewMatirx: camera.getMatrix().clone(),
            projectionMatirx: camera.getProjectionMatrix().clone(),
            viewProjectionMatirx: camera.getViewProjectionMatrix().clone(),
        }
    };

    let BaseFrameAttachment = _gl.COLOR_ATTACHMENT0;
    let maxFrameAttachment = _gl.getParameter(_gl.MAX_COLOR_ATTACHMENTS);

    let _glFrame = function() {
        _glObject.call(this);
        Object.assign(this, {
            _frame: undefined,
            _depthStencil: undefined,
            _drawBufferMap: new Map(),
            _drawBuffers: [],
        });
    };

    _glFrame.prototype = Object.assign(Object.create(_glObject.prototype), {
        constructor: _glFrame,

        checkTextures: function(textureMap, depthStencilTexture) {
            let completed = true;
            textureMap.forEach(function(texture2d, location) {
                let glTexture = self.initTexture2d(texture2d);
                if (glTexture === undefined) {
                    completed = false;
                }
                this._drawBufferMap.set(location, glTexture);
            }.bind(this));

            if (depthStencilTexture) {
                let glTexture = self.initTexture2d(depthStencilTexture);
                if (glTexture !== undefined ) {
                    this._depthStencil = glTexture;
                }
            }
        
            return completed;
        },

        generateFromRenderTarget: function(renderTarget) {
            let textureMap = renderTarget.getTextureMap();
            let depthStencilTexture = renderTarget.getDepthStencilTexture();
            this._drawBuffers = [];
            if (this.checkTextures(textureMap, depthStencilTexture) === false) {
                return undefined;
            }
            let frameBuffer = _gl.createFramebuffer();
            _gl.bindFramebuffer(_gl.FRAMEBUFFER, frameBuffer);
            this._drawBufferMap.forEach(function(glTexure2d, location) {
                if (location >= maxFrameAttachment) {
                    CGE.Logger.error('current just support ' + maxFrameAttachment + ' attachments, but you set ' + 'location');
                    return undefined;
                }
                let attachment = BaseFrameAttachment + location;
                this._drawBuffers.push(attachment);
                _gl.framebufferTexture2D(_gl.FRAMEBUFFER, attachment, _gl.TEXTURE_2D, glTexure2d.getHandler(), 0);
            }.bind(this));
            if (depthStencilTexture) {
                _gl.framebufferTexture2D(_gl.FRAMEBUFFER, _gl.DEPTH_STENCIL_ATTACHMENT, _gl.TEXTURE_2D, this._depthStencil.getHandler(), 0);
            }
            _gl.bindFramebuffer(_gl.FRAMEBUFFER, null);
            this._frame = frameBuffer;
            this.setLocalVersion(renderTarget.getUpdateVersion());
            return this;
        },

        apply: function() {
            _gl.bindFramebuffer(_gl.FRAMEBUFFER, this._frame);
            _ext.WEBGL_draw_buffers.drawBuffersWEBGL(this._drawBuffers);
        },
    });

    this.applyRenderTarget = function(renderTarget) {
        if (renderTarget.isFollowScreen) {
            renderTarget.setSize(screenWidth, screenHeight);
        }
        let glFrame = initializedMap.get(renderTarget.id);
        if (glFrame && glFrame.getLocalVersion() === renderTarget.getUpdateVersion()) {
            if (!glFrame.checkTextures(renderTarget.getTextureMap(), renderTarget.getDepthStencilTexture())) {
                return undefined;
            }
        } else {
            glFrame = new _glFrame();
            if (!glFrame.generateFromRenderTarget(renderTarget)) {
                return undefined;
            }
            initializedMap.set(renderTarget.id, glFrame);
        }
        glFrame.apply();
        applyTergetState(renderTarget.getState());
    };

    this.renderScene = function(scene, renderTarget) {
        // TODO: renderTarget should be managed by something;
        if (renderTarget === undefined) {
            _gl.bindFramebuffer(_gl.FRAMEBUFFER, null);
            applyTergetState(defaultTargetState);
        } else {
            self.applyRenderTarget(renderTarget);
        }
        clear(true, true, false);
        renderCount++;
        let camera = scene.getMainCamera();
        if (camera === undefined) {
            CGE.Logger.warn('follow scene miss mainCamera');
            return undefined;
        }
        let cameraMatrices = this._getCameraMatrices(camera);
        let entities = scene.getRenderEntities();
        entities.forEach(function(entity) {
            this._renderEntity(entity, cameraMatrices);
        }.bind(this));
    };
};

// export {CGE as default};
