package com.bfwg.model;

/**
 * Created by fan.jin on 2016-10-17.
 */
public class UserTokenState {
    private String access_token;
    private long expires_in;
    private String[] authorities;

    public UserTokenState(String access_token, long expires_in, String[] authorities) {
        this.access_token = access_token;
        this.expires_in = expires_in;
        this.authorities = authorities;
    }

    public String getAccess_token() {
        return access_token;
    }

    public void setAccess_token(String access_token) {
        this.access_token = access_token;
    }

    public long getExpires_in() {
        return expires_in;
    }

    public void setExpires_in(long expires_in) {
        this.expires_in = expires_in;
    }

    public String[] getAuthorities() {
        return authorities;
    }

    public void setAuthorities(String[] authorities) {
        this.authorities = authorities;
    }
}
