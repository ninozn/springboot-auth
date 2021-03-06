package com.bfwg.service;

import com.bfwg.model.User;
import com.bfwg.model.UserCreateForm;

import java.util.List;

/**
 * Created by fan.jin on 2016-10-15.
 */
public interface UserService {
    public User findById(Long id);
    public User findByUsername(String username);
    public List<User> findAll ();

    User create(UserCreateForm form);
}
