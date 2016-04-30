//
//  main.hpp
//  vulkanCPP
//
//  Created by 润诚李 on 16/5/1.
//  Copyright © 2016年 liruncheng. All rights reserved.
//

#ifndef main_hpp
#define main_hpp

#include <android/log.h>

#define LOGI(...) ((void)__android_log_print(ANDROID_LOG_INFO, "our_game_Main_log", __VA_ARGS__))
#define LOGW(...) ((void)__android_log_print(ANDROID_LOG_WARN, "our_game_Main_log", __VA_ARGS__))
#define LOGE(...) ((void)__android_log_print(ANDROID_LOG_ERROR, "our_game_Main_log", __VA_ARGS__))

#endif /* main_hpp */
