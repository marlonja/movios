package com.movios.models;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.regex.Pattern;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.movios.controllers.PasswordController;
import com.movios.models.ModelExceptions.InvaldPasswordException;

@Table(name = "users")
@SuppressWarnings("serial")
@Entity
public class UserModel implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @OneToMany(mappedBy = "userModel", cascade = CascadeType.ALL)
    private List<MovieWishListModel> wishListModels = new ArrayList<MovieWishListModel>();

    private String first_name;
    private String last_name;
    private String email;
    private String password;
    private String address;
    private Integer zip_code;
    private String city;

    public Long getId() {
        return id;
    }

    public String getFirst_name() {

        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Integer getZip_code() {
        return zip_code;
    }

    public void setZip_code(Integer zip_code) {
        this.zip_code = zip_code;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public List<MovieWishListModel> getWishListModels() {
        return wishListModels;
    }

    public void setWishListModels(List<MovieWishListModel> wishListModels) {
        this.wishListModels = wishListModels;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        PasswordController.validatePassword(password);
        this.password = password;
    }
}
