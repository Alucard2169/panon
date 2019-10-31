#version 130
uniform sampler2D tex1;
in mediump vec2 qt_TexCoord0;
out vec4 out_Color;

void main()
{
    // Spectrum data
    vec4 sample1= texture(tex1, vec2(qt_TexCoord0.x,0.5)) ;
    // Color defined by user configuration
    vec3 rgb=getRGB(qt_TexCoord0.x);

    // Background color
    out_Color=vec4(0.001,0.001,0.001,0.001);
    // Right channel
    float max_=.5+sample1.g*.5;
    // Left channel
    float min_=.5-sample1.r*.5;

    float h=qt_TexCoord0.y;
    if(min_<=h && h <=max_)
        out_Color=vec4(rgb,1.);
}