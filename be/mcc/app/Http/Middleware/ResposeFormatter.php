<?php

namespace App\Http\Middleware;
// use Symfony\Component\HttpFoundation\Response;
use Illuminate\Http\Response;
use Closure;
use Illuminate\Contracts\Auth\Factory as Auth;

class ResposeFormatter
{

    /**
     * Create a new middleware instance.
     *
     * @return void
     */
    public function __construct()
    {

    }

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string|null  $guard
     * @return mixed
     */
    public function handle($request, Closure $next, $guard = null)
    {
        if ($this->auth->guard($guard)->guest()) {
            return response('Unauthorized.', 401);
        }
        return $next($request);
    }
}
