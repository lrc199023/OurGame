//
//  main.cpp
//  vulkanCPP
//
//  Created by 润诚李 on 16/5/1.
//  Copyright © 2016年 liruncheng. All rights reserved.
//

#include "main.h"

//
// Created by 润诚李 on 16/5/1.
//

#include "Main.h"

#include <android_native_app_glue.h>

struct engine {
    struct android_app* app;
    int animating;
};

/**
 * Process the next main command.
 */
static void engine_handle_cmd(struct android_app* app, int32_t cmd) {
    struct engine* engine = (struct engine*)app->userData;
    switch (cmd) {
        case APP_CMD_SAVE_STATE:
            // Teardown, and recreate each time
            engine->animating = 0;
            break;
        case APP_CMD_INIT_WINDOW:
        {
            LOGI("our_game start");
            engine->animating = 1;
            break;}
        case APP_CMD_TERM_WINDOW:
            break;
        case APP_CMD_GAINED_FOCUS:
            engine->animating = 1;
            break;
        case APP_CMD_LOST_FOCUS:
            engine->animating = 0;
            break;
    }
}

/**
 * This is the main entry point of a native application that is using
 * android_native_app_glue.  It runs in its own thread, with its own
 * event loop for receiving input events and doing other things.
 */
void android_main(struct android_app* state) {
    struct engine engine;
    
    // Make sure glue isn't stripped.
    app_dummy();
    
    memset(&engine, 0, sizeof(engine));
    state->userData = &engine;
    state->onAppCmd = engine_handle_cmd;
    engine.app = state;
    
    // loop waiting for stuff to do.
    while (1) {
        int ident;
        int events;
        struct android_poll_source* source;
        
        // If not animating, we will block forever waiting for events.
        // If animating, we loop until all events are read, then continue
        // to draw the next frame of animation.
        while ((ident=ALooper_pollAll(engine.animating ? 0 : -1, nullptr, &events,
                                      (void**)&source)) >= 0) {
            
            // Process this event.
            if (source != nullptr) {
                source->process(state, source);
            }
            
            // Check if we are exiting.
            if (state->destroyRequested != 0) {
                
                return;
            }
        }
    }
}