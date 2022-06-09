# thread programming
**thread.c**
```c
#include "thread.h"

uint32_t thread_create(callback_t func, void *args)
{
    uint32_t t_id;
    pthread_create(&t_id, NULL, func, args);
    return t_id;
}

int thread_join(uint32_t t_id)
{
    int status;
    int rc;
    rc = pthread_join(t_id, (void**)&status);

    return (rc == 0) ? status : rc;
}

int thread_exit(int state)
{
    pthread_exit((void *)state);
}
```
**thread.h**
```c
#ifndef _THREAD_H_
#define _THREAD_H_

#include <pthread.h>

typedef void*(*callback_t)(void*);
typedef unsigned long int uint32_t;

extern uint32_t thread_create(callback_t func, void *args);
extern int thread_join(uint32_t t_id);
extern int thread_exit(int state);

#endif

